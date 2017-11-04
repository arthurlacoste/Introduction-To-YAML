
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
