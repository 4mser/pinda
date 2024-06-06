import React from 'react';
import Image from 'next/image';
import { useCart } from '../../contexts/CartContext';

const CartIcon = ({ handleCart }) => {
  const { cartCount } = useCart();

  return (
    <div className="relative" onClick={handleCart}>
      <Image 
        src="/svg/bag.svg"
        alt="cart"
        width={30}
        height={30}
        className="md:w-12 cursor-pointer"
      />
      {cartCount > 0 && (
        <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
