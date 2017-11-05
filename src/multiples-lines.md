## Multiple lines

Values can span multiple lines using ``|`` or ``>``.  Spanning multiple lines using a ``|`` will include the newlines.  Using a ``>`` will ignore newlines; it's used to make what would otherwise be a very long line easier to read and edit.
In either case the indentation will be ignored.
Examples are:

```yaml
include_newlines: |
  \/ /| |\/| |
  / / | |  | |__

ignore_newlines: >
  this is really a
  single line of text
  despite appearances
```

Let's combine what we learned so far in an arbitrary YAML example.

This will give you a feel for the format:

```yaml
# An employee record
name: Martin Devloper
job: Developer
skill: Elite
employed: True
foods:
  - Apple
  - Orange
  - Strawberry
  - Mango
languages:
  perl: Elite
  python: Elite
  pascal: Lame
education: |
  4 GCSEs
  3 A-Levels
  BSc in the Internet of Things
```

That's all you really need to know about YAML to start writing YAML.

