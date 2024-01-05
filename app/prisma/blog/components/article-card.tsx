import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ArticleCardProps = {
  id: string;
  title: string;
  content?: string | null;
  createdAt: Date;
};

export const ArticleCard = ({
  id,
  title,
  createdAt,
  content,
}: ArticleCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Badge className="self-start">
          {new Intl.DateTimeFormat("en-gb", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }).format(createdAt)}
        </Badge>
      </CardHeader>
      <CardContent className="truncate flex-grow">{content}</CardContent>
      <CardFooter>
        <Link href={`/prisma/blog/${id}`}>
          <Button variant="link">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
