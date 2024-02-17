"use client";

import Image from "next/image";
import { useState } from 'react';
import {
  cdpContractAbi,
  cdpContractAddress,
} from "@/app/_contract/cdpContract";
import { marketPlaceAbi } from '@/app/_contract/marketPlace';
import { useReadContract, useWriteContract } from 'wagmi';
import { writeContract } from "viem/actions";
import { LendingButton } from "@/app/_components/Common/Button";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onRegister: () => void; // Add this line

}

interface MarketplaceItem {
  id: number;
  owner: string;
  collateralToken: {
    amount: string;
    price: string;
  };
  debtToken: {
    amount: string;
    price: string;
  };
  imageUrl: string;
}

const Modal = ({ isOpen, setIsOpen, onRegister }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-lg font-bold">Register Item</h2>
        <LendingButton onClick={onRegister}>Register</LendingButton>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
};


interface ItemModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  item: any; // Define a more specific type for your item
}


const ItemDetailsModal = ({ isOpen, setIsOpen, item }: ItemModalProps) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-lg font-bold">Item Details</h2>
        <p>Owner: {item.owner}</p>
        <p>Collateral Token Amount: {item.collateralToken.amount}</p>
        <p>Collateral Token Price: ${item.collateralToken.price}</p>
        <p>Debt Token Amount: {item.debtToken.amount}</p>
        <p>Debt Token Price: ${item.debtToken.price}</p>
        <button className="mt-4" onClick={() => setIsOpen(false)}>Close</button>
      </div>
    </div>
  );
};


export default function MarketPlace() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MarketplaceItem | null>(null);

  const { writeContract } = useWriteContract();


  const openCdpPosition = () => {
    writeContract(
      {
        abi: cdpContractAbi,
        address: "0x585c82f7DAc53263800b59D276d573ef87Af8119",
        functionName: "open",
        args: [],
      },
      {
        onSuccess: (txHash) => {
          console.log(txHash);
        },
        onSettled: (txHash) => {
          console.log(txHash);
        },
        onError(error, variables, context) {
          console.log(error, variables, context);
        },
      },
    );
  };


  const registerMarketPlace = () => {
    writeContract(
      {
        abi: marketPlaceAbi,
        address: "0x04304Ec4dE0Df362F255A3e83c928a50f8c2EC90",
        functionName: "register",
        args: [
          "0x585c82f7DAc53263800b59D276d573ef87Af8119",
          "5",
          "1",
        ],
      },
      {
        onSuccess: (txHash) => {
          console.log(txHash);
        },
        onSettled: (txHash) => {
          console.log(txHash);
        },
        onError(error, variables, context) {
          console.log(error, variables, context);
        },
      },
    );
  };

  const marketplaceItems = [
    {
      id: 1,
      owner: '0xDcf6866f372292F9c03317811FD57679598c8e61',
      collateralToken: { amount: '100', price: '200' },
      debtToken: { amount: '50', price: '100' },
      registeredPrice: '100',
      imageUrl: '/path/to/your/image.jpg', // Add image URLs here
    },
    {
      id: 2,
      owner: '0x123',
      collateralToken: { amount: '100', price: '200' },
      debtToken: { amount: '50', price: '100' },
      registeredPrice: '100',
      imageUrl: '/path/to/your/image.jpg', // Add image URLs here

    },
    // Add more items as needed...
  ];

  return (
    <div className="container mx-auto px-4 flex flex-col">

      <div className="container mx-auto px-4 flex justify-center mt-4">
        <button className="btn btn-primary rounded-lg text-white bg-point w-[200px] h-10 flex items-center justify-center" onClick={() => setIsModalOpen(true)}>Register Your CDP</button>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} onRegister={registerMarketPlace} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {marketplaceItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-5 relative" onClick={() => { setSelectedItem(item); setIsItemModalOpen(true); }}>
            <h3 className="text-lg font-bold mt-2">Registered Price: {item.registeredPrice}</h3>
            <p className="text-sm">Current Net Price: ${Number(item.collateralToken.price) - Number(item.debtToken.price)}</p>

            <button
              className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded"
              onClick={() => { setSelectedItem(item); setIsItemModalOpen(true); }}
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
      <ItemDetailsModal isOpen={isItemModalOpen} setIsOpen={setIsItemModalOpen} item={selectedItem} />

    </div>
  );
}



