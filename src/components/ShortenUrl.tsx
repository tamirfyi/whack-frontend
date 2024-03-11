import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';

interface IShortenUrlFormInput {
  original: string;
}

const ShortenUrl = () => {
  const { register, handleSubmit } = useForm<IShortenUrlFormInput>();

  const onSubmit: SubmitHandler<IShortenUrlFormInput> = async (data) => {
    try {
      await axios
        .post('http://localhost:3000/url', {
          original: data.original,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>whack!</CardTitle>
        <CardDescription>shorten any long url in one click ✨</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="url">long url</Label>
              <Input
                id="url"
                placeholder="enter a long url here"
                {...register('original', { required: true })}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>shorten</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ShortenUrl;
