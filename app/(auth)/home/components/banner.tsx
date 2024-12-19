import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useInterval } from "react-use";
export function Banner(){
    const[currentPoster, setCurrentPoster] =useState(0);
    const bannerFlicker = ()=>{
        if(currentPoster >5){
            setCurrentPoster(0);
        }
        setCurrentPoster(currentPoster+1)
    }
    useInterval(() => {
        bannerFlicker()
          }, 5000);
    return(
        <Card>
            <h1>
                {currentPoster}
            </h1>
        </Card>
    )
}