import axios from "axios";
import React from "react";
import authHeader from "../../utils";
import './styles.css';

//type TUserlvl= {img: string}
import handshake from "../../img/handshake.png"

//500 бонусов
import med3off from "../../img/med3off.png" 
import med3 from "../../img/med3.png"
//1500 бонусов
import med2off from "../../img/med2off.png"    
import med2 from "../../img/med2.png" 
//3000 бонусов
import med1off from "../../img/med1off.png"     
import med1 from "../../img/med1.png" 
//5000 бонусов
import cupoff from "../../img/cupoff.png"     
import cup from "../../img/cup.png" 

export const LVL = () => {
    const BACKEND_URL = 'http://localhost:4000';

    const [userData, setUserData] = React.useState({
        balance: 0,
    });
    
    /*const [lvl, setLvl] = React.useState<TUserlvl>({
        level: 1,
        img: ''
    })*/
    const [picture, setPicture] = React.useState<string>('');
    const [pictureTW, setPictureTW] = React.useState<string>('');
    const [pictureON, setPictureON] = React.useState<string>('');
    const [pictureCP, setPictureCP] = React.useState<string>('');

// Получаем баланс
    const getUserBalance = async() => {
        const balance = await axios.get(`${BACKEND_URL}/user/me`, {
              headers: authHeader(),
          }).then((result) => {
              const data = result.data.response;
              if (data) {
                  console.log(data)
                  setUserData({
                      balance: data.balance,
                  })
                return data.balance
              }
              return 0
              
          })
          return balance
      }; //Работа с фото
      const getUserLevel = async (balance: number) =>{
          if(balance >= 500){
              setPicture (med3)
          }
          else
          { setPicture (med3off)}

          if(balance >= 1500){
            setPictureTW (med2)
          }
          else{ setPictureTW (med2off)}

          if(balance >= 3000){
            setPictureON (med1)
          }
          else{ setPictureON (med1off)}

          if(balance >= 5000){
            setPictureCP (cup)
          }
          else{ setPictureCP (cupoff)}
      }
      React.useEffect(() => {
          (async function fetchUserData(){
            const balance = await  getUserBalance();
            getUserLevel(balance)
          })()
      }, []);

    return (
        <div>
            <div  className="div">
                <h1>Ваши достижения!</h1>
                <div className="divL">
                <div className="divMed">
                    <img src={handshake} alt="Рег" width={150} height={150}/>
                    <h2 className="pp">Вы с нами!</h2>
                </div>
                <div className="divMed">
                    <img src={picture} alt="Рег" width={150} height={150}/>
                    <h2  className="pp">У вас 500 бонусов!</h2>
                </div>
                <div className="divMed">
                    <img src={pictureTW} alt="Рег" width={150} height={150}/>
                    <h2  className="pp">У вас 1500 бонусов!</h2>
                </div>
                <div className="divMed">
                    <img src={pictureON} alt="Рег" width={150} height={150}/>
                    <h2  className="pp">У вас 3000 бонусов!</h2>
                </div>
                <div className="divMed">
                    <img src={pictureCP} alt="Рег" width={150} height={150}/>
                    <h2  className="pp">У вас 5000 бонусов!</h2>
                </div>
                </div>
            </div>
        </div>
    )
    
}