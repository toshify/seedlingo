---
---

# Content specification

::: tip Format versions
Seedlingo `v1.4.0` and above requires format version `1.4.0`.

Seedlingo `v1.3.0` and above requires format version `1.3.0`.

Seedlingo `v1.0.0` and above requires format version `1.2.1`.

Seedlingo `v0.91.0` and above requires format version `1.1.1`.

Seedlingo `v0.9.0` requires format version `1.1.0`.
:::

## ContentSpec.json

The root content specification file is `ContentSpec.json`. It must be present
under that name. `ContentSpec.json` describes the file structure of the content.

### formatVersion

Mandatory field of type `string`.

```json
"formatVersion": "1.4.0"
```

`formatVersion` is used by the Seedlingo app to determine how the file can be
expected to be formatted.

### instructions

Mandatory field of type `Array`; must contain 8 specific instruction paths of
type `string`.

```json
"instructions": [
  "welcome": "welcome.mp3",
  "homeButton": "audio/homeButton.mp3",
  ...
]
```

`instructions` is a collection of paths to audio files instructing the user on
how to interact with various app features. Each entry must point to an audio
file with a path relative to the `content` folder.

Mandatory sub-fields of type `string`:

- `welcome` - the message played the first few times a user opens the app
- `homeButton` - the instruction audio attached to the home button
- `continueButton` - the instruction audio attached to the continue button
- `toggleInstructionsButton` -
  the instruction audio attached to the instruction overlay toggle
- `matchingExercise` - an audio file describing how to solve a matching exercise
- `multipleChoiceExercise` -
  an audio file describing how to solve a multiple-choice exercise
- `singleClozeExercise` -
  an audio file describing how to solve a single-cloze exercise
- `multiClozeExercise` -
  an audio file describing how to solve a multi-cloze exercise

### wordSpecFile

Mandatory field of type `string`.

```json
"wordSpecFile": "WordSpec.json"
```

`wordSpecFile` is a path to the file specifying every word used in any unit
(see [Word-specification](#word-specification)).

### units

Mandatory field of type `Array`; must contain at least one unit.

```json
"units": [
  {
    "name": "My first unit",
    "icon": "mdiNumeric",
    "introductionAudio": "audio/introduction/DescriptionOfUnit1.mp3",
    "unitSpecFile": "Unit1Spec.json"
  },
  {...}
]
```

`units` is a collection of unit descriptions, referencing the unit specification through `unitSpecFile`.

Each unit must have the following mandatory fields of type `string`:

- `name`, the name of the unit, currently not displayed anywhere
- `icon`, the name of a [Material Design icon](https://materialdesignicons.com),
  prefixed with `mdi`
  and [Camel-Cased](https://en.wikipedia.org/wiki/Camel_case),
  so that `numeric-1` becomes `mdiNumeric1`
- `introductionAudio`, the relative path to the audio introducing the unit
- `unitSpecFile`, the relative path to the file containing the specification
  for the unit (see [Unit-specification](#unit-specification)).

## Word-specification

The word-specification defines the relationship between words and their
corresponding media, i.e. audio, picture, video and/or symbol (i.e. icon).

<!-- markdownlint-disable MD024 -->
### formatVersion
<!-- markdownlint-enable MD024 -->

Mandatory field of type `string`.

```json
"formatVersion": "1.4.0"
```

`formatVersion` is used by the Seedlingo app to determine how the file can be
expected to be formatted.

### wordCount

Mandatory field of type `number`.

```json
"wordCount": "5"
```

`wordCount` is the number of words specified in the word-specification. This
number can be counted by searching the file for `audio`, a mandatory sub-field,
and counting the occurrences. Running the [content specification
validation](/content/content-validation.md) will inform you if the number is
incorrect.

### words

Mandatory field of type `object` where the keys are unique `strings`, and the
value is an `object` with a mandatory `word` field, and any of the optional
`audio`, `picture`, `video` or `symbol` fields.

```json
"words": {
  "e4cbe366-e875-4399-aa73-468eb72af1e5": {
    "word": "one",
    "audio": "audio/one.mp3",
    "symbol": ["mdiNumeric1"]
  },
  {...}
}
```

Each word must have the following mandatory field of type `string`:

- `word`, the orthographic representation of the word in the target language,
  e.g. "one" or "我"

Each word can have any or none of the following optional fields:

- `audio`, the path (`string`) to the audio file representing the pronunciation
  of the word
- `picture`, the path (`string`) to the picture representing the word
- `video`, the path (`string`) to the video representing the word
- `symbol`, a list (`Array`) of one or more names (`strings`) of
  [Material Design icons](https://materialdesignicons.com), prefixed with `mdi`
  and [Camel-Cased](https://en.wikipedia.org/wiki/Camel_case),
  so that `numeric-1` becomes `mdiNumeric1`

## Unit-specification

The unit-specification defines which exercises to include in a unit, and
which words from the word-specification to include in an exercise.

<!-- markdownlint-disable MD024 -->
### formatVersion
<!-- markdownlint-enable MD024 -->

Mandatory field of type `string`.

```json
"formatVersion": "1.4.0"
```

`formatVersion` is used by the Seedlingo app to determine how the file can be
expected to be formatted.

### id

Mandatory field of type `string`.

```json
"id": "bb0c1d6f-7d00-4700-8b6c-053d2ad0bb7c"
```

`id` is a unique identifier for a unit specification, preferably a GUID.

### unitIndex

Mandatory field of type `number`.

```json
"unitIndex": "1"
```

`unitIndex` is the order in which this unit should appear in the unit
overview.

### multipleChoiceCount

Mandatory field of type `number`.

```json
"multipleChoiceCount": "8"
```

`multipleChoiceCount` is the number of exercises in the unit of the type
`MultipleChoice`.

### matchingCount

Mandatory field of type `number`.

```json
"matchingCount": "8"
```

`matchingCount` is the number of exercises in the unit of the type
`Matching`.

### explanationCount

Mandatory field of type `number`.

```json
"explanationCount": "8"
```

`explanationCount` is the number of exercises in the unit of the type
`Explanation`.

It is currently not possible to specify either ExplanationMatching or
ExplanationMultipleChoice; Seedlingo will randomly choose to present an
Explanation-exercise as either an ExplanationMatching-exercise or an
ExplanationMultipleChoice-exercise.

### singleClozeCount

Mandatory field of type `number`.

```json
"singleClozeCount": "8"
```

`singleClozeCount` is the number of exercises in the unit of the type
`SingleCloze`.

### multiClozeCount

Mandatory field of type `number`.

```json
"multiClozeCount": "8"
```

`multiClozeCount` is the number of exercises in the unit of the type
`MultiCloze`.

### comprehensionCount

Mandatory field of type `number`.

```json
"comprehensionCount": "8"
```

`comprehensionCount` is the number of exercises in the unit of the type
`Comprehension`.

### wordsExercisedCount

Optional field of type `number`.

```json
"wordsExercisedCount": "8"
```

`wordsExercisedCount` is the number of unique words referenced in the unit as
valid correct options through exercises, i.e. words that are being exercised in
this unit. Words that are provided as incorrect alternatives should be
excluded from this count.

### exercises

Mandatory field of type `Array`; must contain at least one exercise.

`exercises` is a collection of exercise definitions specifying which words from
the [Word-specification](#word-specification) to practice through a particular type of exercise, and which words to provide as incorrect options if needed.

Each exercise must have the following mandatory fields of type `string`:

- `id`, the unique id of the exercise
- `type`, the type of exercise, which has to be one of these:
  - `MultipleChoice`
  - `Matching`
  - `Explanation`
  - `SingleCloze`
  - `MultiCloze`
  - `Comprehension`

Depending on the `type`, an exercise should have certain additional
fields.

#### MultipleChoice

- `multipleChoiceSpec` (mandatory), an `Object` defining the multiple choice
  exercise, containing:
  - `multipleChoiceWords` (mandatory), a list (`Array`) of at least 4 unique
    word-references

```json
"exercises": [
  {
    "id": "dc760ae7-0804-4d5b-8102-c78b49ded883",
    "type": "MultipleChoice",
    "multipleChoiceSpec": {
      "multipleChoiceWords": [
        { "one": "00bb28fc-ca72-4c60-b04e-9484771a5303" },
        { "two": "89377ac8-f03a-43af-b701-168e5c02757f" },
        {...}
      ]
    }
  },
  {...}
]
```

#### Matching

- `matchingSpec` (mandatory), an `Object` defining the matching exercise,
  containing:
  - `matchingWords` (mandatory), a list (`Array`) of at least 2 unique
    word-references
  - `unsuppressWordAudio` (optional), a `boolean` (`true` or `false`) override to
    allow audio cues for word tiles to play before a word tile has been matched
    to its picture/symbol tile. Defaults to `false`.

```json
"exercises": [
  {
    "id": "7ce5fd1b-7b94-4ff7-8940-6c09301b10aa",
    "type": "Matching",
    "matchingSpec": {
      "matchingWords": [
        { "two": "89377ac8-f03a-43af-b701-168e5c02757f" },
        { "three": "f2b83c98-23a5-49d6-a366-a4530fdde789" },
      ],
      "unsuppressWordAudio": false
    }
  },
  {...}
]
```

#### Explanation

- `explanationSpec` (mandatory), an `Object` defining the explanation exercise,
  containing:
  - `explanation` (mandatory), a list (`Array`) of at least one word-reference
    forming a keyword, synonym or some other form of explanation that serves as
    the clue to identify which single word the explanation points to.
  - `explanationTargets` (mandatory), an `Object` defining the correct target word
    (valid option) the explanation hints to, as well as a few incorrect
    alternatives (invalid options) that the correct alternative can hide among.
  - `audio` (optional), the relative path (`string`) to the audio file
    representing the pronunciation of the explanation
  - `picture` (optional), the relative path (`string`) to a picture representing
    the explanation
  - `video` (optional), the relative path (`string`) to a video representing the
    explanation
  - `symbol` (optional), a list (`Array`) of one or more names (`strings`) of
    [Material Design icons](https://materialdesignicons.com), prefixed with `mdi`
    and [Camel-Cased](https://en.wikipedia.org/wiki/Camel_case),
    so that `numeric-1` becomes `mdiNumeric1`, representing the idea conveyed by
    the explanation.

```json
"exercises": [
  {
    "id": "df7e8b41-d7bb-4dd8-acab-69a0c0045664",
    "type": "Explanation",
    "explanationSpec": {
      "explanation": [
        { "mama's": "2e803a36-22d3-4183-994a-00d4a2837b39" },
        { "mama": "14bb0008-1397-4684-8ef5-2f524524fc84" }
      ],
      "explanationTargets": {
        "validOption": { "grandma": "8c40dd19-996c-428b-8962-212bd7e1c63c" },
        "invalidOptions": [
          { "grandpa": "97646a8e-33ee-4e43-a95d-4eeead0c4f94" },
          { "uncle": "5cd464a3-a04a-4ad2-9565-091036425550" },
          { "aunt": "e045242e-1867-444c-baf4-01f5d3f59fe3" }
        ]
      },
      "audio": "audio/mamasmama.mp3",
      "symbol": ["mdiHumanFemale"]
    }
  },
  {...}
]
```

#### SingleCloze

- `singleClozeSpec`, an `Object` defining the cloze exercise, containing:
  - `text` (mandatory), a list (`Array`) of elements that make up a cloze
    sentence (fill-the-blank sentence) with a *single* blank, correct target
    words (valid options) that will complete the sentence in a way that makes
    the sentence meaningful and grammatically correct, as well as a few
    incorrect alternatives (invalid options) that the correct alternative can
    hide among. `Object`'s in `text` must have one of these shapes:
    - a word-reference using a `string` key, like 'grandma', and a
      word-reference value matching the word key as uniquely defined in the word
      spec file, e.g `{ "grandma": "family-word-number-28" }`
    - two lists (`Array`), one of `validOptions` and one of `invalidOptions`,
      indicating that this entry in the `text` is a blank/gap that has a set
      of valid alternatives that would make sense of the completed text, and a
      set of invalid alternatives that will be treated as incorrect answers.
      Either list should exclusively contain word-references as described above.
      For a cloze exercise with only one blank/gap, `singleClozeSpec.text`
      must contain one and only one reference to `validOptions` and
      `invalidOptions`.
  - `suppressClozeAudio` (optional), a `boolean` (`true` or `false`) that
    specifies whether to prohibit users hearing the pronunciation of a word when
    tapping a word in the cloze sentence (`suppressClozeAudio: true`), or to
    allow users to hear the pronunciation of words (not blanks) they tap in the
    cloze sentence (`suppressClozeAudio: false`). Defaults to `false`.
  - `suppressOptionAudio` (optional), a `boolean` (`true` or `false`) that
    specifies whether to prohibit users hearing the pronunciation of an option
    when tapping it (`suppressOptionAudio: true`), or to allow users to hear the
    pronunciation when they tap an option (`suppressOptionAudio: false`).
    Defaults to `false`.

```json
"exercises": [
  {
    "id": "ddac5f75-c5af-4734-8455-b76b425e8bfb",
    "type": "SingleCloze",
    "singleClozeSpec": {
      "text": [
        { "他": "c53add23-aba4-42f5-9fbb-d6a6d1d8882c" },
        { "是": "bc1ec01c-0fde-4e63-82e6-c0f78d01529e" },
        { "我": "9f4c842a-e36a-48b1-aa4b-955aedef35d2" },
        { "的": "843f4af4-5dcb-44a4-b690-759db29999c4" },
        {
          "validOptions": [
            { "爸爸": "3773c800-4f9b-4951-b7a7-9e0c9861d089" },
            { "哥哥": "4e43f1dd-bdd8-4cfb-ad27-8446e44cc754" },
            { "弟弟": "802939da-7ac0-409c-bfb2-b0d6f81e2f56" },
            { "姥爷": "6c0f975c-4364-40c7-ae72-cfc2145da7e3" },
            { "爷爷": "1ad7f2f9-521a-4a00-b549-bd4ee081149b" },
            { "丈夫": "76004162-7f5b-4e28-bda5-bbcb39be8165" },
            { "大哥": "3eac3c44-25ef-434e-9e94-1fc71e510557" },
            { "二哥": "abb4c7a4-0c11-4f29-8506-a852f04a0ef5" },
            { "大弟弟": "0fcce854-d190-4e88-a3fe-da2e4763f48c" },
            { "小弟弟": "1846e964-c362-417a-815d-3319b2b6aca5" },
            { "姐夫": "c48bf08b-df1b-4fa8-a41b-15405ecebf49" },
            { "妹夫": "98d18086-a60a-4f81-80b3-e05bd2aaa400" },
            { "儿子": "af7cc883-0091-4d24-800e-95ca67ee451c" },
            { "外孙": "bb91deac-cbe1-4314-b7d3-9662cc82d446" },
            { "孙子": "4e594d79-ec54-4cc7-8ef0-2a950ebb2de3" },
            { "外甥": "54ff3fa1-141e-4620-861d-335376b3f8f2" },
            { "侄子": "dda9c23b-503d-4ada-8293-3450c8bfae7c" }
          ],
          "invalidOptions": [
            { "妈妈": "8da1e3a6-3268-40da-8707-be2a2c902c16" },
            { "姐姐": "b521f4d2-1084-4f17-af18-1bd6738d23a0" },
            { "妹妹": "8ee121b4-8522-4e16-91b7-8a2af070efd8" },
            { "姥姥": "d63f08dd-f8e6-4b47-940b-8d9d939034a6" },
            { "奶奶": "5cd464a3-a04a-4ad2-9565-091036425550" },
            { "妻子": "9ca14628-fd31-4f36-8f99-70dd7c9c8b28" },
            { "大姐": "891c12fc-23a3-4bb9-9744-dbaf2e785624" },
            { "二姐": "1d9b329c-a2fa-4eaa-aa2c-39d026a898a7" },
            { "大妹妹": "8531fafd-fd6c-47a2-861b-c401362f17c2" },
            { "小妹妹": "683a0834-e76f-44b4-9858-467b63380147" },
            { "嫂子": "afaf98c8-5f3d-4be9-8338-3f2942e6be17" },
            { "弟妹": "75a122a7-4a08-4333-acf1-072483f6a570" },
            { "女儿": "34d92533-9c8c-4469-b050-2638f2b5f4d5" },
            { "外孙女": "83ded6b2-d80b-4a78-bd10-00d4822aefb9" },
            { "孙女": "7f3cd2dd-da20-4c3c-8fb1-d6beefb43d0e" },
            { "外甥女": "b6ebbe69-9834-41f3-a353-4a9142d599b3" },
            { "侄女": "0087add3-b033-4cac-bb6b-cebf1c1acdd0" }
          ]
        }
      ],
      "suppressClozeAudio": false,
      "suppressOptionAudio": false
    }
  },
  {...}
]
```

#### MultiCloze

- `multiClozeSpec`, an `Object` defining the cloze exercise, containing:
  - `text` (mandatory), a list (`Array`) of elements that make up a cloze
    sentence (fill-the-blank sentence) with words interspersed with *multiple*
    blanks as lists of correct target words (valid options) that will complete
    the sentence in a way that makes the sentence meaningful and grammatically
    correct, *if put in the correct order*. The key to solving the exercise is
    to connect the valid word to the corresponding blanks. `Object`'s in
    `text` must have one of these shapes:
    - a word-reference using a `string` key, like 'grandma', and a
      word-reference value matching the word key as uniquely defined in the word
      spec file, e.g `{ "grandma": "family-word-number-28" }`
    - a list (`Array`) called `validOptions` containing exactly one entry
      indicating that this entry in the `text` is a blank/gap that has exactly
      one correct alternative that will make sense of the completed text. The
      list entry must be a word-reference as described above.
      `multiClozeSpec.text` must contain at least two objects containing
      `validOptions`.
  - `suppressClozeAudio` (optional), a `boolean` (`true` or `false`) that
    specifies whether to prohibit users hearing the pronunciation of a word when
    tapping a word in the cloze sentence (`suppressClozeAudio: true`), or to
    allow users to hear the pronunciation of words (not blanks) they tap in the
    cloze sentence (`suppressClozeAudio: false`). Defaults to `false`.
  - `suppressOptionAudio` (optional), a `boolean` (`true` or `false`) that
    specifies whether to prohibit users hearing the pronunciation of an option
    when tapping it (`suppressOptionAudio: true`), or to allow users to hear the
    pronunciation when they tap an option (`suppressOptionAudio: false`).
    Defaults to `false`.

```json
"exercises": [
  {
    "id": "6b941a32-89f3-4436-ac53-f2769cb0d3b3",
    "type": "MultiCloze",
    "multiClozeSpec": {
      "multiClozeText": [
        { "我": "9f4c842a-e36a-48b1-aa4b-955aedef35d2" },
        { "的": "843f4af4-5dcb-44a4-b690-759db29999c4" },
        { "妈妈": "8da1e3a6-3268-40da-8707-be2a2c902c16" },
        { "有": "35389a5a-4493-44e5-a8ae-dc0a30c98dbf" },
        { "四": "da473305-758c-40c0-a61b-d9de0aefb5a4" },
        { "个": "90f79865-ac90-4644-9a8b-88eaad30e979" },
        {
          "validOptions": [
            { "孩子": "c8de49d6-d26a-4d62-b959-83cf57327387" }
          ]
        },
        { ":": "526a8ee7-7525-4b0f-a3a2-92e29618bed3" },
        { "两": "5dbf7670-f66d-46e4-b971-8f8d6de95a5c" },
        { "个": "90f79865-ac90-4644-9a8b-88eaad30e979" },
        { "儿子": "af7cc883-0091-4d24-800e-95ca67ee451c" },
        { "，": "3fde2b11-aa78-4a96-9bd4-75c8462132b6" },
        { "两": "5dbf7670-f66d-46e4-b971-8f8d6de95a5c" },
        { "个": "90f79865-ac90-4644-9a8b-88eaad30e979" },
        {
          "validOptions": [
            { "女儿": "34d92533-9c8c-4469-b050-2638f2b5f4d5" }
          ]
        },
        { "。": "5d0f410c-83ff-43bd-a31e-922b42b054ef" },
        { "我": "9f4c842a-e36a-48b1-aa4b-955aedef35d2" },
        { "有": "35389a5a-4493-44e5-a8ae-dc0a30c98dbf" },
        { "两": "5dbf7670-f66d-46e4-b971-8f8d6de95a5c" },
        { "个": "90f79865-ac90-4644-9a8b-88eaad30e979" },
        {
          "validOptions": [
            { "姐姐": "b521f4d2-1084-4f17-af18-1bd6738d23a0" }
          ]
        },
        { "，": "3fde2b11-aa78-4a96-9bd4-75c8462132b6" },
        {
          "validOptions": [
            { "一": "1d936b6b-e44c-466c-8d04-ab52643670c2" }
          ]
        },
        { "个": "90f79865-ac90-4644-9a8b-88eaad30e979" },
        { "弟弟": "802939da-7ac0-409c-bfb2-b0d6f81e2f56" },
        { "。": "5d0f410c-83ff-43bd-a31e-922b42b054ef" }
      ],
      "suppressClozeAudio": false,
      "suppressOptionAudio": false
    }
  },
  {...}
]
```

#### Comprehension

- `comprehensionSpec` (mandatory), an `Object` defining the comprehension
  exercise, containing:
  - `text` (mandatory), a list (`Array`) of word-references to words that
    make up a short text forming the base for the comprehension exercise.
    `Object`'s in `text` must have this shape:
    - a word-reference using a `string` key, like 'grandma', and a
      word-reference value matching the word key as uniquely defined in the word
      spec file, e.g `{ "grandma": "family-word-number-28" }`
  - `multipleChoiceSpec` (optional), an `Object` defining a multiple-choice
    exercise to include in the comprehension exercise. The specification here
    should follow the general specification for multiple-choice exercises as
    [defined above](#multiplechoice).
  - `matchingSpec` (optional), an `Object` defining a matching exercise to
    include in the comprehension exercise. The specification here should follow
    the general specification for matching exercises as [defined above](#matching).
  - `comprehensionQuestions` (mandatory), a list (`Array`) of questions to pose
    with answer options. Each questions must be an `Object` with this shape:
    - `questionText` (mandatory), a `string` posing the question in written form.
    - `questionAudio` (mandatory), the path (`string`) to the audio file for the
      question
    - `options` (mandatory), a list (`Array`) of `Object`s defining a possible
      answer to the question, of the shape:
      - `word` (mandatory), a reference to a word in the word-spec
      - `correct` (optional), a `boolean` (`true` or `false`) indicating whether
        this option is the correct answer. Default to `false`.
  - `comprehensionStages` (optional), a list (`Array`) of stages for the
    comprehension exercise. A stage spec must have the following shape:
    - `instructionText` (optional), an instruction (`string`) describing the
      nature of the stage and what is expected of the user for this stage
    - `instructionAudio` (optional), a path (`string`) to the audio file for the
      instruction for this stage
    - `questionnaire` (optional), a `boolean` (`true` or `false`) indicating
      that this stage should use the `comprehensionQuestions` to form a
      questionnaire-stage. Defaults to `false`.
    - `onlyInstructionOnRequest` (optional), a `boolean` (`true` or `false`)
      indicating whether the instruction for this stage should be suppressed
      until the user asks for it (`true`), or should be played automatically
      (`false`). Defaults to `false`.
  - `suppressOptionAudio` (optional), a `boolean` (`true` or `false`) indicating
    whether to prevent the audio on answer options to be played before the
    correct answer has been found. Defaults to `false`.


```json
"exercises": [
  {
    "id": "45e04dde-17d0-4842-a685-c10f3d11d6d3",
    "type": "Comprehension",
    "comprehensionSpec": {
      "text": [
        { "We": "a300d857-21d1-4e9d-b1e9-ac120f038708" },
        { "are": "2000898c-9972-4971-807b-365d38db8bb0" },
        { "three": "eac2f9c5-8dca-49f4-b972-022dd174a9b1" },
        { "people": "d3e928c7-1cfe-426b-96f6-98c7b65d1077" },
        { "in": "08175114-13e9-4802-b5d3-458c58f289a2" },
        { "my": "c1f71e0c-62e7-41f5-ae48-320f60ba639f" },
        { "family": "1abb6ead-f22a-4565-99cc-26a412c9ca48" },
        { ".": "a64c2a49-916a-4109-a385-83915288c3b1" }
      ],
      "matchingSpec": {
        "matchingWords": [
          { "two": "89377ac8-f03a-43af-b701-168e5c02757f" },
          { "three": "f2b83c98-23a5-49d6-a366-a4530fdde789" },
        ]
      },
      "comprehensionQuestions": [
        {
          "questionText": "How many people are there in this family?",
          "questionAudio": "audio/unit02-1-q1.mp3",
          "options": [
            {
              "correct": true,
              "word": {
                "three": "923c82a4-5425-4fbe-95b3-66901a667c23"
              }
            },
            {
              "word": {
                "you": "2122a3a3-d4f6-42ea-a2a5-38f8865cc851"
              }
            }
          ]
        },
        "comprehensionStages": [
          {
            "instructionText": "Read the text carefully, then answer questions about the text.",
            "instructionAudio": "audio/comprehension-1.mp3"
          },
          {
            "questionnaire": true
          },
          {
            "instructionText": "Click an alternative to suggest the answer to the question.",
            "instructionAudio": "audio/comprehension-2.mp3"
          },
          {
            "instructionText": "Practice some new words with this matching exercise.",
            "instructionAudio": "audio/comprehension-3.mp3"
          },
          {
            "instructionText": "Finally, re-read the text and click on words you don't recognize to hear their pronunciation.",
            "instructionAudio": "audio/comprehension-4.mp3"
          }
        ]
      ]
    }
  }
]
```
