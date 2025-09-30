import pic from "./assets/pic.webp";
const user = {
    name:"Laptop",
    imageUrl: pic,
    imageSize: 200
}

function Nott(){
    return (
        <div>
            <h1>{user.name}</h1>
            <img 
                src={user.imageUrl} 
                alt={user.name} 
                width={user.imageSize} 
                height={user.imageSize}
            />
        </div>
    )
}

export default Nott