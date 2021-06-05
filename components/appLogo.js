import { useTheme } from 'next-themes';


export default function AppLogo() {
    const { theme } = useTheme();

    function isDark(){ return theme === "dark"; }

    if(!theme) return null;

    return (
        <img src={isDark() ? "/devchallenges-light.svg" : "/devchallenges.svg"} />
    )
}
