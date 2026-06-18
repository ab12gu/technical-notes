# Classes

[https://docs.python.org/3/tutorial/classes.html](https://docs.python.org/3/tutorial/classes.html)

Doesn't have `private` and `public` modifiers, though standard in many OOP languages.

`del modname.the_answer` will remove the attribute the_answer from the object named by modname.

## Notation

`modname.funcname`, `modname` is a module object and `funcname` is an attribute of it.

## Scope Classifiers

When calling names, python does a search for location

1. the innermost scope, which is searched first, contains the local names
2. the scopes of any enclosing functions, which are searched starting with the nearest enclosing scope, contain non-local, but also non-global names
3. the next-to-last scope contains the current module’s global names
4. the outermost scope (searched last) is the namespace containing built-in names

To define scope of identifier:

- `Nonlocal` is one above to local scope
- `Global` is global

```
class ClassName:
    count = 0
    name = Abhay
    __init__(self, val=None):
        <constructor>
    def printline(self):
        print("HELLO")
```
