## Desc

the hugo module based on `hugo-enterprise` for website: `alpha.biz`

---

## Use module

config in your website project:


`./config/_default/config.yaml`

```yaml
module:
  imports:
    - path: github.com/zeeis/hugo-alphabiz-theme
    - path: github.com/zeeis/hugo-enterprise
```

`./go.mod`

```mod
require github.com/zeeis/hugo-alphabiz-theme v0.1.11
require github.com/zeeis/hugo-enterprise v0.1.44
```

---

## Publish new package

git tag a commit of `hugo-alphabiz-theme` with version (eg: `v0.2.0`), then push.

config `go.mod` of your website project to use specific version module

```mod
require github.com/zeeis/hugo-alphabiz-theme v0.2.0
```

---

## Content

- themes
  - `data/theme/alphabiz.yaml`
- [widgets](./docs/widgets.md)
  - ab.hero
  - ab.release
  - ab.features
- [shortcodes](./docs/shortcodes.md)
  - ab-video
