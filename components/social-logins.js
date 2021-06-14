export default function SocialLogins() {

    function alertUnderConstructionFeature(){
        alert("This feature is under development, please be patient!");
    }

    return (
        <ul className="flex items-center mb-3">
            <li className="mr-5">
                <button onClick={alertUnderConstructionFeature} className="outline-none focus:outline-none">
                    <img src="/Google.svg" />
                </button>
            </li>
            <li className="mr-5">
                <button onClick={alertUnderConstructionFeature} className="outline-none focus:outline-none">
                    <img src="/Facebook.svg" />
                </button>
            </li>
            <li className="mr-5">
                <button onClick={alertUnderConstructionFeature} className="outline-none focus:outline-none">
                    <img src="/Twitter.svg" />
                </button>
            </li>
            <li className="mr-5">
                <button onClick={alertUnderConstructionFeature} className="outline-none focus:outline-none">
                    <img src="/Github.svg" />
                </button>
            </li>
        </ul>
    )
}
