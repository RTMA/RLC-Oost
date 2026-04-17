# Dataset template (YOLO)

Gebruik deze structuur na export uit Label Studio (of andere tool):

```text
dataset/
  train/
    images/
    labels/
  valid/
    images/
    labels/
  test/
    images/
    labels/
  data.yaml
```

## Richtlijn splitsing
- train: 70%
- valid: 15%
- test: 15%

## data.yaml voorbeeld

```yaml
path: /volledig/pad/naar/dataset
train: train/images
val: valid/images
test: test/images
nc: 2
names: [product_ok, product_defect]
```
