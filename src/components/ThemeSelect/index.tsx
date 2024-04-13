import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeSelect() {
  const themes = [
    "garden",
    "dark",
    "light",
    "business",
    "autumn",
    "aqua",
    "corporate",
  ];

  const { theme, changeTheme } = useTheme();

  const handleSelectChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    changeTheme(value);
  };

  return (
    <>
      <label>Escolha um tema: </label>
      <select name="themes" onChange={handleSelectChange} className="">
        <option value={theme}>{theme}</option>
        {themes.map(
          (tema) =>
            tema !== theme && (
              <option value={tema} key={tema}>
                {tema}
              </option>
            )
        )}
      </select>
    </>
  );
}
