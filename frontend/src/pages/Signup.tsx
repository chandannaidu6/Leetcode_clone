import { Auth } from "../components/Auth";
import { Appbar } from "../components/Appbar";
export const Signup = () => {
    return <div>
        <Appbar />
        <div>
            <Auth type={'signup'}/>
        </div>
    </div>
}