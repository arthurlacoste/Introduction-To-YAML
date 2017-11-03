

## Node anchors

Two features that distinguish YAML from the capabilities of other data serialization languages are structures and data typing.

YAML structures enable storage of multiple documents within single file, usage of references for repeated nodes, and usage of arbitrary nodes as keys.

For clarity, compactness, and avoiding data entry errors, YAML provides node anchors (using `&`) and references (using `*`). References to the anchor work for all data types (see the ship-to reference in the example below).

Below is an example of a queue in an instrument sequencer in which two steps are reused repeatedly without being fully described each time.

```yaml
# sequencer protocols for Laser eye surgery
---
- step:  &id001  # defines anchor label &id001
  instrument: Lasik 2000
  energy: 5.4
  duration: 12
  repetition: 1000
  size: 1mm

- step: &id002
  instrument: Lasik 2000
  energy: 5.0
  duration: 10
  repetition: 500
  size: 2mm
- step: *id001 # refers to the first step (with anchor &id001)
- step: *id002 # refers to the second step
- step:
    <<: *id001
    size: 2mm # redefines just this key, refers rest from &id001
- step: *id002
```

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

## Multiples documents

Core to YAML is the concept of documents. A document is not just a separate file in this case. Instead, think of a document as just a chunk of YAML. You can have multiple documents in a single stream of YAML, if each one is separated by ''---'', like:

```yaml
---
document: this is doc 1
---
document: this is doc 2
...
```

Using an ellipsis explicitly ends a document. The nice thing about documents is you can treat them as different entities. Let's say, "people" and "cars" are in the same file. You can use them for a bunch of entities that look alike, e.g.:

```yaml
---
employed: true
family: [wife, toddler]
hobby: python
limbs: {arms: 2, legs: 2}
person: jesse
---
employed: true
family: [wife, toddler]
hobby: python
limbs: {arms: 2, legs: 2}
person: jesse
```

## Variables

There is actually no support of variables into [the last specifications of YAML](http://www.yaml.org/spec/1.2/spec.html). But there is [some implementations](https://github.com/arthurlacoste/tampax) to use a system handling variables. Extensions library or template system like [Jinja2](jinja.pocoo.org) or [Twig](https://twig.symfony.com/) can be a way to add this feature to your YAML files.

## Conclusion

Now that you're a more knowledgeable person, I hope you can add new items to a list or keep your key-value pairs aligned without any trouble. You can freely create or adjust your YAML files to your taste by swapping to/from the alternative formats, changing the order of the keys in a map and adding/removing comments.

There is other data serialization format, and each of him has pros and cons. 

* [JSON](https://www.w3schools.com/js/js_json_intro.asp) was made for JavaScript and work very well with it
* [XML](https://en.m.wikipedia.org/wiki/XML) was excellent, and XHTML his born from him
* [MessagePack](https://msgpack.org/) have the best performances, but isn't human readable

## References

- [https://github.com/Animosity/CraftIRC/wiki/Complete-idiot's-introduction-to-yaml]()
- [http://jessenoller.com/blog/2009/04/13/yaml-aint-markup-language-completely-different]()
- [http://docs.ansible.com/ansible/latest/YAMLSyntax.html]()
- [https://en.m.wikipedia.org/wiki/YAML]()
- [https://github.com/yaml/YAML2/wiki/Who-uses-it-and-why%3F]()

## External links

- [http://yaml.org/]()
- [Online YAML > JSON parser](https://nodeca.github.io/js-yaml/)
- [Online JSON > YAML parser](https://www.json2yaml.com/)
- [YAML validator](https://codebeautify.org/yaml-validator)