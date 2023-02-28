
const Button = ({onPress, name}) => {

    return (
        <div style={{textAlign: 'center', backgroundColor: 'gray'}}>
            <button onClick={onPress} style={{color: 'blue', fontSize: 30, borderRadius: 10}}>
                {name}
            </button>
            
            {/* <button 
                onClick={onPress} 
                style={{color: 'blue', fontSize: 30, borderRadius: 10}}
                placeholder={name}
            /> */}
        </div>
        

    );
}

export default Button;