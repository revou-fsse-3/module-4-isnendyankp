import { ReactNode } from "react";


interface Props {
    border: boolean;
    children: ReactNode;
}


const Card = ({ border, children } : Props) => {
    return (
      <div className={`${border && 'rounded border-slate-600 border'} p-8`}>
        {children}
      </div>
    );
};

export default Card;

// Progress:
// 1. cr8 Card component
// 2. cr8 interface Props has border props with boolean type
// 3. add border props as a parameter to Card component with type Props
// 4. add condition to className with border props value true and add rounded and border slate 600 border to className value
// 5. add children props to interface Props with ReactNode type
// 6. add children props to Card component with type Props
// 7. render children props inside Card component
// 8. add styling padding  with p-2 code tailwind equal to padding: 0.5rem; /* 8px */
// 9. import ReactNode from react
// 10. styling padding with tailwind code p-8


// Explanation:
//  <div className={`${border && 'rounded border-slate-600 border'} p-2`}> 
//  kalo bordernya ada maka memakai rounded border-slate-600 border dan kalo bordernya tidak ada maka menggunakan p-2
