import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CheckboxCardPropsI } from '../../../interfaces/common/card/card.interface'

const CheckboxCard = ({ title, active = false }: CheckboxCardPropsI) => {
    return (
        <div className="card cursor-pointer">
            <div className="p-3 d-flex align-items-center h-100">
                <FontAwesomeIcon
                    className={active ? "text-warning" : "text-light"}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                    icon={active ? faCheckCircle : faCircle} />
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default CheckboxCard
