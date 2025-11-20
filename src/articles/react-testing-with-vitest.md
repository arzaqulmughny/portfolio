---
title: "Testing React App Using Vitest & React Testing Library"
description: "In this article, we will learn how to test a React app using Vitest and React Testing Library. We will cover the basic setup, writing tests, and running tests."
author: "Arzaqul Mughny"
category: "Blog"
date: "2024-07-13"
bannerUrl: "/images/technology-1283624_640.jpg"
tags:
  - reactjs
  - vitest
  - react-testing-library
---

## The Problem
When developing an application, we can't ensure our app is bug-free. We will test our app before going into production. Often, while creating new features or modifying existing code, we can unintentionally broke previous code and produce errors. It would be useful to know this during the development process. Imagine if we don't knew the broken feature and that is main feature of our application, If this happens, it can lead to user frustration and damage the application's reputation.

## Solution
To minimize this from happening, we can implement automated testing. With this, we can quickly identify any bugs that occur and take immediate action to fix them. I don't want to dwell on what automated testing is, you can read more about it [here](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Test_automation&ved=2ahUKEwj7x9j5jKOHAxU3SWwGHeFBDPsQFnoECBAQAQ&usg=AOvVaw0g9q0JbGt4-lynotMHvmXC).

Benefit of implementing Automate Testing
- **Early Bug Detection**
By running tests automatically, bugs can be detected earlier in the development process, making them easier and cheaper to fix.

- **Increased Confidence**
With automated testing in place, developers and stakeholders have more confidence that the application functions as expected, improving the overall quality of the final product.

Several things need to be considered before carrying out automated testing in our application:
- **Messy code isn't testable**
We need to know how to write clean code in React, such as breaking large components down into smaller parts and abstracting logic. Implementing automated testing encourages developers to write clean code.

- **Clarity regarding feature specifications**
It can be very tiring if we have written test code but the features change often. We would then need to update the test code repeatedly, which takes a lot of time.

So, I will share my learning journey about testing our React application, including how to set it up and a little about how to implement it. Enough explaining, Let’s get started.

## Tools Used
There is tools used to test our application, I will explain according to my understanding about these tools.

### Vitest
We will write unit test & integration test in our application. We can use [Vitest](https://vitest.dev/) as test runner, it will run our all test code then give the results.

### React Testing Library (RTL)
Using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) we can test our React component by user perspective.

### Mock Service Worker (MSW)
While testing our app in integration test test we don't interact to other services like API server. We need to _"fake"_ that API response using [Mock Service Worker](https://testing-library.com/docs/react-testing-library/intro/).

### User Events
This is a companion for React Testing Libary is used for simulate user interactions

### JSDOM
While testing we no need to start React project instead using [JSDOM](https://www.npmjs.com/package/jsdom) to emulate browser

### Jest DOM
This is like an utility to ensure the html elements behavior are as we expect

## Setup

Create React App using Vite
```lang-js
npm create vite@latest react-test -- -- template react-ts
cd react-test
npm install
npm run dev
```

Install Vitest
```
npm install -D Vitest
```

Install React Testing Library (RTL)
```
npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom
```

Install JSDOM
```
npm i -D jsdom
```

Install Jest DOM
```
npm install --save-dev @testing-library/jest-dom
```

Install User Event
```
npm install --save-dev @testing-library/user-event
```

Add script run Vitest in `package.json`
```
  "scripts": {
        "test": "vitest"
    }
```

Configure vite.config.ts

```
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true, // Make Vitest variable can be accessed globaly
        environment: 'jsdom', // Change default testing environment to jsdom
        setupFiles: './src/tests/setup.ts', // Setup file
    },
});
```

Configure `tsconfig.app.json`

```
   "compilerOptions": {
    "types": ["vitest/globals"] // Make code editor has type hinting for Vitest
  },
```

Install Mock Service Worker (MSW)

```
npm install msw@latest --save-dev
```

Create `handler.ts` in `src/tests/mocks`

```
import { http, HttpResponse } from 'msw';

export const handlers: any = [];
```

Create `node.ts` in `src/tests/mocks` for mocking API

```
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
```

Create `setup.ts` in `src/tests`

```
import '@testing-library/jest-dom';
import { server } from './mocks/node';

beforeEach(() => {
    // Enable mocking
    server.listen();
});

afterEach(() => {
    // Disable mocking
    server.resetHandlers();
});

afterAll(() => {
    // Clean up once the tests are done
    server.close();
});

```

<br>Now we can start to write test code for our app

## Basic Unit Testing

To start i will give a simple example:

```
// sum.ts
export const sum = (a: number, b: number): number => {
    return a + b;
};
```

We will test this function by creating sum.test.ts alongside sum.js

```
// sum.test.ts
import { sum } from './sum';

describe('sum function', () => {
  test('should return the sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 7)).toBe(12);
  });
});
```

### Explanation

1. `describe`: grouping some related tests with sum function
2. `test`: is a block that contains specific test
3. `expect`: this is the way to make an assertion. `expect` expects the result of sum(a, b) to be equal to the value we specified with toBe.
4. `toBe`: is one of [Vitest matcher](https://vitest.dev/api/expect.html) which is used to express expectations in unit tests.

To start Vitest we can type ```npm run test``` in terminal.

## Testing React Component

I will make a counter component for example

```
// src/components/Counter.tsx
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                type='button'
                data-testid="decrease"
                onClick={() => setCount((currentValue) => currentValue - 1)}
            >
                Decrease
            </button>
            <h1 data-testid="current">{count}</h1>
            <button
                type='button'
                data-testid="increase"
                onClick={() => setCount((currentValue) => currentValue + 1)}
            >
                Increase
            </button>
        </div>
    );
};

export default Counter;
```

We test `Counter.tsx` by creating `Counter.test.tsx`

```
// src/components/Counter.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter component', () => {
    it('Should render correctly', () => {
        render(<Counter />);

        // Assert element exists
        expect(screen.getByTestId('decrease')).toBeInTheDocument();
        expect(screen.getByTestId('increase')).toBeInTheDocument();
        expect(screen.getByTestId('current')).toBeInTheDocument();

        // Assert rendering initial value
        expect(screen.getByTestId('current')).toHaveTextContent('0');
    });

    it('Should decrease and incrementing correctly'),
        async () => {
            render(<Counter />);
            const user = userEvent.setup();

            // Decreasing count
            const decreaseButton = screen.getByTestId('decrease');
            await user.click(decreaseButton);
            expect(screen.getByTestId('current')).toHaveTextContent('0');

            // Increasing count
            const increaseButton = screen.getByTestId('increase');
            await user.click(increaseButton);
            expect(screen.getByTestId('current')).toHaveTextContent('1');
        };
});
```

## Testing Component That Do Api Call

I will use [Jsonplaceholder](https://jsonplaceholder.typicode.com/) free api

```
// components/Users.tsx

import { useEffect, useState } from 'react';

type User = {
    id: number;
    name: string;
};

/**
 * User list
 */
const Users = () => {
    const [data, setData] = useState<null | User[]>(null);
    const [error, setError] = useState<null | unknown>(null);
    const [loading, setLoading] = useState(false);

    /**
     * Fetch users
     */
    const fetchUsers = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();

            setData(result);
            setError(null);
        } catch (error) {
            setData(null);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div data-testid='loading'>Loading...</div>;
    }

    if (error) {
        return <div data-testid='error'>Error when fetching users...</div>;
    }

    return (
        <ul data-testid='users'>
            {data?.map((user) => (
                <li
                    data-testid='user'
                    key={user.id}
                >
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default Users;
```

Adding handler

```
// src/tests/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers: any = [
    http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.json([
            {
                id: 1,
                name: 'Arza',
            },
            {
                id: 2,
                name: 'Zaarza',
            },
        ]);
    }),
];

```

```
// src/components/Users.test.tsx

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Users from './Users';
import { server } from '../tests/mocks/node';
import { HttpResponse, http } from 'msw';

describe('Users component', () => {
    it('Should render correctly', () => {
        render(<Users />);

        // Assert element exists
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    it('Should render users correctly after loading', async () => {
        render(<Users />);

        // Wait for loading
        const loading = screen.getByTestId('loading');
        await waitForElementToBeRemoved(loading);

        // Assert rendering users
        const userItem = screen.getAllByTestId('user');
        expect(userItem).toHaveLength(2);
    });

    it('Should render error correctly', async () => {
        // Mock error
        server.use(
            http.get('https://jsonplaceholder.typicode.com/users', async () => {
                return new HttpResponse(null, {
                    status: 500,
                });
            })
        );

        render(<Users />);

        // Assert rendering error
        expect(await screen.findByTestId('error')).toBeInTheDocument();
    });
});
```
