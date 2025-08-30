import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutView() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About This Starter Kit</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to build modern full-stack applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>Frontend Stack</CardTitle>
              <Badge>React</Badge>
            </div>
            <CardDescription>Modern React ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                React 19 with TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Vite for fast development
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Tailwind CSS for styling
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                shadcn/ui components
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                React Router for navigation
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>Backend Stack</CardTitle>
              <Badge>Python</Badge>
            </div>
            <CardDescription>Python-based API</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                FastAPI framework
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Automatic API documentation
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Pydantic for data validation
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                SQLAlchemy ORM
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                PostgreSQL database
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>Development Tools</CardTitle>
              <Badge>DevOps</Badge>
            </div>
            <CardDescription>Productivity and quality</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Docker containerization
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Hot module replacement
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                ESLint code linting
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                TypeScript type checking
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  •
                </Badge>
                Poetry dependency management
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>Getting Started</CardTitle>
              <Badge variant="secondary">Setup</Badge>
            </div>
            <CardDescription>Quick setup instructions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm space-y-2">
              <p>1. Clone the repository</p>
              <p>
                2. Run{" "}
                <Badge variant="outline" className="text-xs font-mono">
                  make dev
                </Badge>
              </p>
              <p>
                3. Visit{" "}
                <Badge variant="outline" className="text-xs font-mono">
                  http://localhost:3000
                </Badge>
              </p>
              <p>4. Start building your application!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <Card>
        <CardHeader>
          <CardTitle>What's Included</CardTitle>
          <CardDescription>Complete starter kit features</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This starter kit provides a solid foundation for building full-stack
            applications. It includes authentication scaffolding, database
            integration, API endpoints, and a modern React frontend. Perfect for
            MVPs, prototypes, or production applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
