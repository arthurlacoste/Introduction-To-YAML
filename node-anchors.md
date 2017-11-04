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
