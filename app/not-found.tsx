'use client';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image
        src='/images/logo.svg'
        width={88}
        height={88}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className='p-6 w-1/3 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold mb-4 text-center'>یافت نشد</h1>
        <p className='text-destructive text-center'>به نظر می اید صفحه مورد نظر شما موحود نباشد.</p>
        <Button
          variant='outline'
          className='mt-4 ml-2'
          onClick={() => (window.location.href = '/')}
        >
          بازگشت به صفحه اصلی
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
