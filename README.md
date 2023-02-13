# Trysts - Application

The repository for Trysts web application. Writing in Typescript with `ReactJs 18`

## Important Dependencies 🌈

[![react-router-dom](https://img.shields.io/badge/react--router--dom-%5E6.8.1-green)](https://reactrouter.com/)
[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.6-green)](https://styled-components.com/)
[![zustand](https://img.shields.io/badge/zustand-%5E4.3.2-green)](https://zustand-demo.pmnd.rs/)
[![100ms live](https://img.shields.io/badge/%40100mslive%2Freact--sdk-%5E0.6.3-green)](https://www.npmjs.com/package/@100mslive/react-sdk/)
[![three](https://img.shields.io/badge/three-%5E0.149.0-green)](https://www.npmjs.com/package/@100mslive/react-sdk/)

## Convention 📚

1. Component name must be `Capitalize`
2. Prevent export component as `default`
3. For simple component, type/interface should be define inside component file
4. For complex type/interface, define in specific file inside `models` folder (create if needed)
5. If any type is recognize by intellisense or basic type, no need to define them again
6. For constant variable, define it in `constants.ts` inside `libs` folder
7. Props drill maximum 3 levels
8. Use `semantic tag` as much as posible

### Create a new component ⚙️

To create new component, follow these several steps:

1. Create new component folder
2. Create `index.ts` file (this file will export all of the additional components that use to build our component)
3. Create `<component_name>.tsx` file (this file will contain our component code)

_Example:_

```
// Folder structure
├── src
│   ├── components
│   │   ├──  ColorPicker
│   │   │   ├──  index.ts
│   │   │   ├──  ColorPicker.tsx
│   │   │   └──  ColorItem.tsx
```

```typescript
// ColorItem.tsx
type ColorItemProps = {
  colorName: 'red' | 'green'
  onColorChange: () => void
}

export const ColorItem: React.FC<ColorItemProps> = ({ colorName, onColorChange }) => {
  return <div color={colorName} onClick={onColorChange} />
}
```

```typescript
// ColorPicker.tsx
import { ColorItem } from './ColorItem'

export const ColorPicker = () => {
  return (
    <div>
      <ColorItem colorName="red" onColorChange={() => {}} />
    </div>
  )
}
```

```typescript
// index.ts
export * from './ColorItem'
export * from './ColorPicker'
```

### Import component 💾

```typescript
import { ColorPicker } from '@/components/ColorPicker'
```

### Commit message 🗣

1. Use the imperative, present tense: "change" not "changed" nor "changes"
2. Don't capitalize the first letter
3. No dot (.) at the end
4. (optinal) Icon added for funny purpose (maximum 1 icon)

```bash
git commit -m "<prefix>: <message>"
```

#### Prefix

1. `init`: Project initiation and configs
2. `feat`: A new feature
3. `fix`: A bug fix
4. `refactor`: A code change that neither fixes a bug nor adds a feature
5. `perf`: A code change that improves performance

_Example:_

```bash
git commit -m "fix: add pivotal emojis to readme 🌈"
```

