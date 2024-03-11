import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ShortenUrl = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>whack!</CardTitle>
        <CardDescription>shorten any long url in one click ✨</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="url">long url</Label>
              <Input id="url" placeholder="enter a long url here" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>shorten</Button>
      </CardFooter>
    </Card>
  );
};

export default ShortenUrl;
