import React , {Component} from "react"
import loading from "./loading.svg"
export class Loading extends Component {
    render() {
        return (
            <div className="text-center mb-3">
                <img src={loading} width="80px" height="80px" alt="gif"/>
            </div>
        )
    }
}