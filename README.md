# Hello World Action 👋

Una GitHub Action de prueba que saluda y muestra información del repositorio.

## Uso

```yaml
name: Test Hello World Action
on: [push]

jobs:
  hello:
    runs-on: ubuntu-latest
    steps:
      - name: Ejecutar Hello World Action
        uses: nicolas-nunez_bicevida/hello-world-action@v1
        with:
          who-to-greet: 'Nicolás'
          message: 'Esta es mi primera Action!'
```

## Inputs

### `who-to-greet`

**Requerido** A quién saludar. Por defecto `"World"`.

### `message`

**Opcional** Mensaje personalizado adicional.

## Outputs

### `time`

La hora en que se ejecutó el saludo.

### `greeting`

El mensaje de saludo completo generado.

## Ejemplo completo

```yaml
name: Ejemplo Completo
on: [push]

jobs:
  greeting:
    runs-on: ubuntu-latest
    steps:
      - name: Saludo
        id: hello
        uses: nicolas-nunez_bicevida/hello-world-action@v1
        with:
          who-to-greet: 'GitHub Community'
          message: '¡Esta Action funciona perfectamente!'
      
      - name: Mostrar outputs
        run: |
          echo "Hora: ${{ steps.hello.outputs.time }}"
          echo "Saludo: ${{ steps.hello.outputs.greeting }}"
```

## Licencia

MIT
