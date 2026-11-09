# Consumer Complaint Intelligence | Interactive NLP Case Study

A portfolio-ready interactive case study based on DTAN-520 Text Mining coursework at Indiana Wesleyan University. Built from the team's actual CFPB analysis results, with Shelby Steward's individual technical contributions identified on the page.

## Deploy to your existing GitHub Pages portfolio

1. In your existing `shelbysteward.github.io` repository, create a folder named `consumer-complaint-intelligence`.
2. Upload the **contents** of this package into that folder (including `index.html`, `metrics.json`, `notebooks/`, and `assets/`). GitHub's web interface supports folder upload by dragging files/folders into the upload screen; GitHub Desktop or Git is also fine.
3. Visit `https://shelbysteward.github.io/consumer-complaint-intelligence/` after GitHub Pages deploys.
4. Add a project card/link in your existing homepage pointing to `/consumer-complaint-intelligence/`. Match the existing portfolio design and project-card markup when editing its `index.html`.

The interactive charts use embedded aggregate JSON and require no external JS library, build tools, or API keys. The page works offline when opened locally.

## Evidence and limitations

- Original CFPB credit card complaints: 93,626; usable matched narratives: 28,841 (30.8%).
- Sample: 5,000; analyzed narratives: 4,999.
- TextBlob sentiment: negative 1,094; neutral 2,161; positive 1,744.
- NMF: seven topics; MiniBatch K-Means: six clusters.
- Held-out issue classifier: accuracy 67.25%; macro F1 0.5551; majority-class baseline 35.22%.
- initial classification analysis perfect classification scores were affected by target leakage. narrative analysis used actual narratives and is more informative, but remains exploratory.
- Do not treat polarity as satisfaction, cluster themes as validated labels, or the sample as representative of all consumers.

## Files and privacy

`index.html` is the self-contained interactive case study. `metrics.json`, topic/cluster summaries, and classification reports are aggregate exports. `notebooks/` contains the supplied Python notebooks for technical review. The raw CFPB cleaned CSV and narrative-level exports are **not** included in this public package; review notebooks for embedded outputs before publishing if privacy requirements are strict. The narrative analysis notebook may require a separate narrative input dataset to rerun.

## Attribution

Team project: Stephen Bloom, DeShawn Hawkins, Asante Knight, and Shelby Steward. Stephen acquired and matched archived consumer narratives. Shelby implemented narrative analysis preprocessing, sentiment, NMF topics, clustering, supervised classification, evaluation, and exports, and led initial classification analysis analysis and interpretation. See academic reports for full team contributions. AI-assisted research/editing disclosures appear in those reports.

Source: [CFPB Consumer Complaint Database](https://www.consumerfinance.gov/data-research/consumer-complaints/).
