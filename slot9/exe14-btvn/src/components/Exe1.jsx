import { useTheme } from "../contexts/ThemeContext"

export default function Exe1() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div style={{backgroundColor:theme.background, color:theme.foreground, textAlign:'center', padding:'1rem'}}>
            <h1>Exercise 1</h1>
            <button onClick={toggleTheme}>Toggle me</button>
        </div>
    )
}