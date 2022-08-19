import "./style.scss";

export default function Info(props) {
    return (
        <div className="Info">
            <span className="Info__value">{props.value}</span>
            <span className="Info__name">{props.name}</span>
        </div>
    );
}
