import { ShoppingCart, Headset, ShoppingBag, WalletCards } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className='grid md:grid-cols-4 gap-4 p-4'>
          <div className='space-y-2'>
            <ShoppingBag />
            <div className='text-sm font-bold'>ارسال رایگان</div>
            <div className='text-sm text-muted-foreground'>
             ارسال رایگان برای بالای هزار تومن
            </div>
          </div>
          <div className='space-y-2'>
            <ShoppingCart />
            <div className='text-sm font-bold'>ارسال سریع</div>
            <div className='text-sm text-muted-foreground'>
             سه روز کاری
            </div>
          </div>
          <div className='space-y-2'>
            <WalletCards />
            <div className='text-sm font-bold'>پرداخت امن</div>
            <div className='text-sm text-muted-foreground'>
              پرداخت در محل
            </div>
          </div>
          <div className='space-y-2'>
            <Headset />
            <div className='text-sm font-bold'>24/7 ساپورت</div>
            <div className='text-sm text-muted-foreground'>
              در صورت مشکل تماس بگیرید.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
