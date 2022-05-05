# Material UI

This project was made for self learning purposes based on the lessons from [This Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58)

## Learning

### Typography

The following notes explains some of the content learned in the course:

- noWrap: if the text reaches the end of the browser it puts ...

[Here](https://mui.com/pt/material-ui/api/typography/) we can see all possible attributes.

### Default Theme

    import { createTheme, ThemeProvider } from "@mui/material/styles";

[GoogleFonts](https://fonts.google.com/)

### Form

- noValidate: Não quero que utilizes as tuas mensagens de validação Browser
- autoComplete="off": Não haverá autocomplete

- TextField -> label permite ter uma label no texto que passa para cima quando começamos a escrever

- fullWidth estende o componente por toda a pagina
- required apenas adiciona o \* não faz mais validações
