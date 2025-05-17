
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";

export interface LeaderboardEntry {
  id: number;
  rank: number;
  name: string;
  score: number;
  timeTaken?: string;
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
}

const LeaderboardTable = ({ entries }: LeaderboardTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-16 text-center">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right hidden md:table-cell">Time (s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id} className={entry.rank <= 3 ? "bg-gold-50" : ""}>
              <TableCell className="font-medium text-center">
                {entry.rank <= 3 ? (
                  <div className="flex justify-center">
                    <Trophy 
                      className={`h-5 w-5 ${
                        entry.rank === 1 ? 'text-gold-500' : 
                        entry.rank === 2 ? 'text-gray-400' : 
                        'text-amber-700'
                      }`} 
                    />
                  </div>
                ) : (
                  entry.rank
                )}
              </TableCell>
              <TableCell className="font-medium">{entry.name}</TableCell>
              <TableCell className="text-right font-bold">{entry.score}</TableCell>
              <TableCell className="text-right hidden md:table-cell">{entry.timeTaken || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LeaderboardTable;
