import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionCard from '@/components/QuestionCard';
import QuizTimer from '@/components/QuizTimer';
import { questions } from '@/data/questions';
import { toast } from "@/components/ui/use-toast";
import { 
  answerQuestion, 
  nextQuestion, 
  completeQuiz, 
  resetQuiz 
} from '../redux/quizSlice';
import { RootState } from '../redux/store';
import { saveScore } from '@/utils/supabase'; // Add this import

const QUIZ_TIME = 15 * 60; // 15 minutes in seconds

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const { 
    currentQuestionIndex, 
    answers, 
    completed, 
    score, 
    timeTaken
  } = useSelector((state: RootState) => state.quiz);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Increment elapsedTime every second while quiz is running
  useEffect(() => {
    if (completed) return;
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [completed]);

  // Redirect to registration if no name is provided
  useEffect(() => {
    if (!firstName || !lastName) {
      toast({
        title: "Registration Required",
        description: "Please register before taking the quiz",
        variant: "destructive",
      });
      navigate('/register');
    }
  }, [firstName, lastName, navigate]);

  const handleAnswerSubmit = (questionId, selectedOption) => {
    dispatch(answerQuestion({ questionId, selectedOption }));
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleTimeUp = () => {
    dispatch(completeQuiz({ 
      score: calculateScore(),
      timeTaken: elapsedTime
    }));
    
    toast({
      title: "Time's Up!",
      description: "Your quiz time has expired.",
      variant: "destructive",
    });
  };

  const calculateScore = () => {
    let totalScore = 0;
    answers.forEach((answer) => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && question.correctAnswer === answer.selectedOption) {
        totalScore += 100;
      }
    });
    return totalScore;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleViewLeaderboard = async () => {
    const userData = {
      firstName,
      lastName,
      score,
      timeTaken: elapsedTime // Pass elapsedTime here
    };

    const result = await saveScore(userData);

    if (result.success) {
      toast({
        title: "Score Submitted!",
        description: "Your score has been added to the leaderboard."
      });
      navigate('/leaderboard');
    } else {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your score.",
        variant: "destructive",
      });
    }
  };

  const handleRestartQuiz = () => {
    dispatch(resetQuiz());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!completed ? (
            <>
              <h1 className="text-3xl font-bold text-university-800 mb-8 text-center">
                Crack the Code Challenge
              </h1>
              <QuizTimer totalSeconds={QUIZ_TIME} onTimeUp={handleTimeUp} />
              
              <div className="my-8">
                <QuestionCard
                  id={questions[currentQuestionIndex].id}
                  questionText={questions[currentQuestionIndex].text}
                  options={questions[currentQuestionIndex].options}
                  onAnswerSubmit={handleAnswerSubmit}
                  onNextQuestion={handleNextQuestion}
                />
              </div>
              
              <div className="mt-4 text-center text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </>
          ) : (
            <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <h1 className="text-3xl font-bold text-university-800 mb-4">Quiz Completed!</h1>
              <p className="text-2xl font-semibold mb-6">
                Your Score: <span className="text-university-700">{score}</span>
              </p>
              
              <p className="mb-2 text-gray-600">
                Time Taken: {formatTime(elapsedTime)}
              </p>
              
              <p className="mb-8 text-gray-600">
                You answered {answers.length} out of {questions.length} questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleViewLeaderboard} 
                  className="bg-university-800 hover:bg-university-700"
                >
                  View Leaderboard
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Questions;
