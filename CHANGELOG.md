# Changelog


## v0.1.0...v0.1.1

[compare changes](https://github.com/fuzoh/balanse/compare/v0.1.0...v0.1.1)

### 🩹 Fixes

- **dashboard:** Access stats via Show getter to prevent undefined ([5c2e0a1](https://github.com/fuzoh/balanse/commit/5c2e0a1))
- **dashboard:** New build folder in docker file ([ee1d2bc](https://github.com/fuzoh/balanse/commit/ee1d2bc))

### 🏡 Chore

- **dashboard:** Update to solid-start 0.4 ([4818e97](https://github.com/fuzoh/balanse/commit/4818e97))
- **dashboard:** Fix all dependency changes to work with solid-start 0.4 ([cedbd3e](https://github.com/fuzoh/balanse/commit/cedbd3e))

## v0.0.3...v0.1.0

[compare changes](https://github.com/fuzoh/balanse/compare/v0.0.3...v0.1.0)

### 🚀 Enhancements

- Add redis support to quarkus backend ([42f87d2](https://github.com/fuzoh/balanse/commit/42f87d2))
- **server:** ⚠️  Add smallrye health check ([b0fe059](https://github.com/fuzoh/balanse/commit/b0fe059))
- **server:** Add openapi swagger ui ([c1af37e](https://github.com/fuzoh/balanse/commit/c1af37e))
- **stats:** ⚠️  Price amount parse to float ([b841c87](https://github.com/fuzoh/balanse/commit/b841c87))
- **stats:** ⚠️  New endpoint that exposes sell stats ([407ecf7](https://github.com/fuzoh/balanse/commit/407ecf7))
- **stats:** Add method to create index on webhook startup ([4e09b5f](https://github.com/fuzoh/balanse/commit/4e09b5f))
- **stats:** Quarkus now automatically create redis index if needed ([9950ef2](https://github.com/fuzoh/balanse/commit/9950ef2))
- **dashboard:** Display stats progress on new values ([32b8230](https://github.com/fuzoh/balanse/commit/32b8230))

### 🩹 Fixes

- Typos in readme ([909908b](https://github.com/fuzoh/balanse/commit/909908b))
- **stats:** Catch exception when there is no tickets in redis ([fbcee8a](https://github.com/fuzoh/balanse/commit/fbcee8a))
- Openapi always accessible and correct group id ([5bed9ec](https://github.com/fuzoh/balanse/commit/5bed9ec))
- Unnecessary import ([855c138](https://github.com/fuzoh/balanse/commit/855c138))
- Serialisation property name mismatch ([0b997af](https://github.com/fuzoh/balanse/commit/0b997af))
- **webhook:** Missing redis client initialisation ([d19e8e3](https://github.com/fuzoh/balanse/commit/d19e8e3))
- **webhook:** Missing py-modules in pyproject ([cea7f73](https://github.com/fuzoh/balanse/commit/cea7f73))

### 💅 Refactors

- **server:** Change json serialisation implementation ([e786e61](https://github.com/fuzoh/balanse/commit/e786e61))

### 📖 Documentation

- Update readme instructions ([66db3ff](https://github.com/fuzoh/balanse/commit/66db3ff))
- Add link to use webhook tester ([061e11a](https://github.com/fuzoh/balanse/commit/061e11a))
- Add time indication for first docker build ([37f6512](https://github.com/fuzoh/balanse/commit/37f6512))

### 📦 Build

- **webhook:** ⚠️  Convert requirements to pyproject ([d10fe60](https://github.com/fuzoh/balanse/commit/d10fe60))
- **webhook:** Container use pyproject deps ([ac9ecbe](https://github.com/fuzoh/balanse/commit/ac9ecbe))

#### ⚠️ Breaking Changes

- **server:** ⚠️  Add smallrye health check ([b0fe059](https://github.com/fuzoh/balanse/commit/b0fe059))
- **stats:** ⚠️  Price amount parse to float ([b841c87](https://github.com/fuzoh/balanse/commit/b841c87))
- **stats:** ⚠️  New endpoint that exposes sell stats ([407ecf7](https://github.com/fuzoh/balanse/commit/407ecf7))
- **webhook:** ⚠️  Convert requirements to pyproject ([d10fe60](https://github.com/fuzoh/balanse/commit/d10fe60))

