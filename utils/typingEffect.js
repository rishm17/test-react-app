import {useState, useEffect} from 'react'

export default function useTypingEffect(words) {
    const [index, setIndex] = useState(0);
    //const [subIndex, setSubIndex] = useState(0);
    //const [blink, setBlink] = useState(true);
    //const [reverse, setReverse] = useState(false);
  
    // typeWriter
    useEffect(() => {
        const timeout = setTimeout(() => {
        if (index === words.length-1) {
            setIndex(0)
        return;
        }
        if(index < words.length-1 ) {
            setIndex((prev) => prev +1);
            return;
        }
    },5000)


    /*
      if (subIndex === words[index].length + 1 && !reverse ) {
        setReverse(true);
        return;
      }
  
      if (subIndex === 0 && reverse) {
        setReverse(false);
        if (index === words.length-1) {
            setIndex(0)
        return;
      }
        else {
        setIndex((prev) => prev +1);
        return;
        }
      }
  */
      //const timeout = setTimeout(() => {

        //setSubIndex((prev) => prev + (reverse ? -1 : 1));
      //}, //Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
        // )         //150, parseInt(Math.random() * 350)));
  
    return () => clearTimeout(timeout);
    }, [index]);//subIndex, index, reverse]);
  
    /*
    // blinker
    useEffect(() => {
      const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
      }, 500);
      return () => clearTimeout(timeout2);
    }, [blink]);
    */

    return {
        'index' : index,
        //'subIndex' : subIndex,
        //'blink' : blink,
        //'reverse' : reverse
    }
    
    {/*(
        <>
          <h1>
                {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </h1>
        </>
    );*/}
}

/*
export default function useChangingText () {
    const [name, setName] = useState('Param');

    useEffect(() => {
    // Change name every 3 seconds here
        const timer = setInterval(() => {
        setName(previousName => {
            const newName = previousName === 'Param' ? 'Joshua' : 'Param';
            return newName;
        });
        }, 3000);

            // Clearing the timer when component unmounts
            return () => {
            clearInterval(timer);
            };
        }, []);

  return (
    <div>
      <strong>Author Name: </strong>
      {name}
    </div>
  );
}*/
