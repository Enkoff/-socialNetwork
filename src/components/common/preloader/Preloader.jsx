import preloader from "../../../assets/img/loader-2_food.gif";

const Preloader = (props) => {
return (
    <div style={{width: '200px', height: '200px'}}>
            <img src={preloader} alt="preloader" />
    </div>
);
}

export default Preloader;