
---

## ab.hero

hero_image filename: `./assets/media/*`

```yaml
widget: ab.hero
ab_hero:
  hero_image:
    light: app_img_light.jpg
    dark: app_img_dark.jpg
  cta:
    icon_pack: fas
    icon: download
    label: Get Alphabiz
    url: https://github.com/tanshuai/alphabiz/releases
    alt_label: View Documentation
    alt_url: https://github.com/tanshuai/alphabiz/wiki
```

---

## ab.release

> the widget only for alpha.biz download page

```yaml
widget: ab.hero
```

---

## ab.features

icon filename: `./assets/media/icons/*`

```yaml
widget: ab.features
ab_features:
  summary: What is AlphaBiz?
  items:
    - label: Unimpeded Digital Content Worldwide
      icon: outlook_network.png
      icon_pack: custom
      description: |-
        Anthropogenic geographical restrictions will be broken through AlphaBiz application, and users can unimpededly retrieve and download digital content from all over the world.
    - label: Fastest Transmission Speed
      icon: outlook_speed.png
      icon_pack: custom
      description: |-
        Based on the Content Distribution Technology and Decentralized Shared CDN Network Ecology, users will experience the digital content transmission with the fastest speed and the lowest cost.
    - label: Fair and Secure Copyright
      icon: outlook_shield.png
      icon_pack: custom
      description: |-
        Registering the user’s copyrights and modifying records through the blockchain protects the copyrights from infringement, which will make the commercialization more efficient and fair.
    - label: Equivalent and Permanent Value
      icon: outlook_credit.png
      icon_pack: custom
      description: |-
        Through Smart Contracts, the equality between users' revenue and their sharing of bandwidth resources and contents will be ensured, which is undeniable and helps to obtain the greatest degree of preservation.
```
