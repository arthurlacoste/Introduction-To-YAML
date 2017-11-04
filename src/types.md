
## Types

Explicit data typing is seldom seen in the majority of YAML documents since YAML autodetects simple types. Data types can be divided into three categories: core, defined, and user-defined. Core are ones expected to exist in any parser (e.g. floats, ints, strings, lists, maps, ...). Many more advanced data types, such as binary data, are defined in the YAML specification but not supported in all implementations. Finally YAML defines a way to extend the data type definitions locally to accommodate user-defined classes, structures or primitives (e.g. quad-precision floats).

YAML autodetects the datatype of the entity. Sometimes one wants to cast the datatype explicitly. The most common situation is where a single-word string that looks like a number, boolean or tag requires disambiguation by surrounding it with quotes or using an explicit datatype tag.

```yaml
a: 123                     # an integer
b: "123"                   # a string, disambiguated by quotes
c: 123.0                   # a float
d: !!float 123             # also a float via explicit data type prefixed by (!!)
e: !!str 123               # a string, disambiguated by explicit type
f: !!str Yes               # a string via explicit type
g: Yes                     # a boolean True (yaml1.1), string "Yes" (yaml1.2)
h: Yes we have No bananas  # a string, "Yes" and "No" disambiguated by context.
```

Not every implementation of YAML has every specification-defined data type. These built-in types use a double exclamation sigil prefix (<code>!!</code>). 


Particularly interesting ones not shown here are sets, ordered maps, timestamps, and hexadecimal. Here's an example of base64 encoded binary data.

```yaml
gif_file: !!binary |
  R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5
  OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+
  +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC
  AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=
```

Date can be handle too: 

```yaml
datetime: 2001-12-15T02:59:43.1Z
datetime_with_spaces: 2001-12-14 21:59:43.10 -5
date: 2002-12-14
```