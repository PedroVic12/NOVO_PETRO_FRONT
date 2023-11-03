import React, { useState, useEffect } from 'react';


function ContadorFlutterPage() {


    const [num,setNum] = useState(10)




    return ( 
        <>
            <div>
                <p>Valor do Estado :  {num}</p>    
                <button onClick={()=> setNum(10)}>Incrementar</button>
            </div>    
        </>
     );
}

export default ContadorFlutterPage;


