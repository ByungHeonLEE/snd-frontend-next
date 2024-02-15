import { Card } from "@/app/_components/Common/Card";
import classNames from "classnames";
import { useState } from "react";
import { Token } from "../page";

interface ToggleSwitchProps {
  isSupply: boolean;
  setIsSupply: (value: boolean) => void;
}

const ToggleSwitch = ({ isSupply, setIsSupply }: ToggleSwitchProps) => {
  return (
    <div className="flex flex-row items-center justify-start rounded-[30px] h-[60px] w-full">
      <div
        className={classNames(
          "flex flex-row items-center justify-center rounded-[30px] h-[60px] w-1/2 duration-150",
          {
            "bg-point text-white": isSupply,
            "bg-white text-point cursor-pointer hover:bg-primary": !isSupply,
          },
        )}
        onClick={() => {
          setIsSupply(true);
        }}
      >
        Supply
      </div>
      <div
        className={classNames(
          "flex flex-row items-center justify-center rounded-[30px] h-[60px] w-1/2 duration-150",
          {
            "bg-point text-white": !isSupply,
            "bg-white text-point cursor-pointer hover:bg-primary": isSupply,
          },
        )}
        onClick={() => {
          setIsSupply(false);
        }}
      >
        Borrow{" "}
      </div>
    </div>
  );
};

interface ControllerProps {
  isSupply: boolean;
  setIsSupply: (value: boolean) => void;
  selectedToken: Token;
}

export const LendingController = ({
  isSupply,
  setIsSupply,
  selectedToken,
}: ControllerProps) => {
  // TODO : get user balance from wallet
  const userBalance = 1213;

  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-col w-1/3 justify-start items-start gap-5">
      <Card className="flex flex-col justify-start items-start w-full p-2">
        <ToggleSwitch isSupply={isSupply} setIsSupply={setIsSupply} />
        <div>Supply Token(choose)</div>
        <div>amount</div>
        <div className="p-6 w-full h-[150px] bg-[#CACACA] flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-row justify-between items-center w-full">
            <div>$PRICE</div>
            <div>{userBalance}</div>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <input
              type="number"
              className="px-5 text-start outline-none border-none bg-[#CACACA] w-3/4 h-10"
              value={amount}
              onChange={(e) => {
                setAmount(parseInt(e.target.value));
              }}
              placeholder="enter amounts"
            />
            <div className="flex flex-row h-8 justify-center items-center gap-2">
              <div
                className="bg-blue-800 text-white cursor-pointer rounded-xl px-2 py-1"
                onClick={() => {
                  setAmount(userBalance);
                }}
              >
                MAX
              </div>
              <div> {selectedToken} </div>
            </div>
          </div>
          <div className="w-full">
            <input
              type="range"
              value={(amount / userBalance) * 100}
              onChange={(e) => {
                setAmount((parseInt(e.target.value) * userBalance) / 100);
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
        <button className="bg-point text-white rounded-[30px] w-full h-[60px]">
          Enter an Amount
        </button>
      </Card>
    </div>
  );
};

