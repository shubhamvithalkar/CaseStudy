# Introduction to TypeScript

## 1. What is TypeScript (Simple Explanation)

**TypeScript = JavaScript + Types**

JavaScript is flexible but sometimes **too flexible**, which causes bugs.

### Example in JavaScript

```javascript
let age = 20
age = "twenty"
```

JavaScript allows this ❌  
But logically it is wrong.

### TypeScript solves this using types

```typescript
let age: number = 20
age = "twenty" // ❌ Error
```

TypeScript will detect the mistake before running the code.

### So TypeScript helps in:

- ✔ catching bugs early  
- ✔ writing cleaner code  
- ✔ managing large projects  
- ✔ better autocomplete in VS Code  

---

# 2. Why Companies Use TypeScript

Large projects (Google, Microsoft, Netflix, etc.) use TypeScript because:

| Feature | Benefit |
|--------|--------|
| Static Typing | prevents bugs |
| Interfaces | structured code |
| Classes | OOP support |
| Tooling | better autocomplete |
| Scalability | good for large teams |

### Think of it like:

**JavaScript = building without blueprint**

**TypeScript = building with blueprint**

---

# 3. How TypeScript Works

Important concept:

TypeScript **does NOT run directly in browser or Node.**

It must be **compiled into JavaScript first.**

```
TypeScript (.ts)
      ↓
Compiler (tsc)
      ↓
JavaScript (.js)
      ↓
Runs in browser / Node
```

### Example

**app.ts**

```typescript
let name: string = "Shubham"
console.log(name)
```

### Compile

```bash
tsc app.ts
```

### Output

**app.js**

```javascript
var name = "Shubham";
console.log(name);
```

---

# 4. How to Setup TypeScript (VERY IMPORTANT)

## Step 1 Install Node

Download from:

https://nodejs.org

---

## Step 2 Install TypeScript

Run in terminal:

```bash
npm install -g typescript
```

Check installation:

```bash
tsc --version
```

---

## Step 3 Create File

Create file:

```
app.ts
```

---

## Step 4 Compile

```bash
tsc app.ts
```

This creates:

```
app.js
```

---

## Step 5 Run

```bash
node app.js
```

---

# 5. Basic TypeScript Syntax

### String

```typescript
let name: string = "Shubham"
```

### Number

```typescript
let age: number = 20
```

### Boolean

```typescript
let isStudent: boolean = true
```

### Array

```typescript
let marks: number[] = [90, 85, 88]
```

---

# 6. Mini Project 

### Task

1️⃣ Change message to your name  

2️⃣ Print greeting  

3️⃣ Declare age variable  

4️⃣ Print age message  

5️⃣ Try wrong type