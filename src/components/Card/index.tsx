

interface Props {
    border: boolean;
}


const Card = ({ border } : Props) => {
    return (
        <div className={`${border && 'rounded border-slate-600 border'}`}>
            
        </div>
    );
};

export default Card;

// Progress:
// 1. cr8 Card component
// 2. cr8 interface Props has border props with boolean type
// 3. add border props as a parameter to Card component with type Props
// 4. add condition to className with border props value true and add rounded and border slate 600 border to className value 