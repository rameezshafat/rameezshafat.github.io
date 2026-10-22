**MSc Artificial Intelligence, First Class (1:1) · Dublin City University**  
Dublin, Ireland  
[GitHub](https://github.com/rameezshafat) · [LinkedIn](https://www.linkedin.com/in/rameezshafat) · [rameezshafatwani@gmail.com](mailto:rameezshafatwani@gmail.com)

---

## About

I build AI and data systems, and I care most about the part that decides whether you can trust them: how they are evaluated, what they are allowed to do, and where their numbers come from.

I hold a First Class MSc in Artificial Intelligence from DCU. My thesis on retrieval for EU climate law was presented at AICS 2026, and its main lesson was that a benchmark can flatter a system when the test queries reuse the wording of the documents. Before the MSc I worked as a Data Analyst at Nineleaps, where I built a validated PostgreSQL warehouse over six operational sources.

My background is in computer systems (operating systems, networking, system design), so I tend to think about the whole path from data to model to the service that acts on it.

---

## Experience

**Mathematics Tutor** · Dublin City University · *Sep 2026 – Present*

* Teach calculus, multivariable optimisation and mathematical modelling to NFQ Level 8 cohorts across STEM, Economics and Business (MTH1033, MTH1027, MTH1029).

**Data Analyst** · Nineleaps Technology Solutions, Bangalore · *Mar 2025 – Jul 2025*

* Owned two Python automation systems end to end across six relational databases, cutting manual workflow overhead by **30%**.
* Built data-quality checks into each layer of a PostgreSQL warehouse, so integrity failures were caught before they reached reports.

---

## Publications

**Sparse, Dense, and Hybrid Retrieval for EU Climate Statutes: A Leakage-Controlled Evaluation**  
*AICS 2026 (Irish Conference on AI and Cognitive Science), UCD, Dublin · presented 16 Oct 2026 · first author*

**Hybrid CNN and Vision Transformer Model for Diabetic Retinopathy Detection**  
*IEEE ICBMESH 2025* · [DOI: 10.1109/ICBMESH66209.2025.11182184](https://doi.org/10.1109/ICBMESH66209.2025.11182184)

---

## Projects

### Retrieval, NLP & Agents

**Sparse, Dense, and Hybrid Retrieval for EU Climate Statutes** · *DCU MSc Thesis, AICS 2026* · [code](https://github.com/rameezshafat/eu-lexical-semantic-legal-rag)  
*Python · BM25 · nomic-embed-text · FAISS · Reciprocal Rank Fusion*

* Benchmarks that reuse statute wording in their queries make keyword search look better than it is.
* Compared BM25, dense and hybrid retrieval over 1,156 provisions from 72 EU instruments; dense led at **92.5%** top-5.
* Built a leakage-controlled 102-query benchmark; rewording queries moved BM25's MRR by **0.29** against dense's **0.09**.

**Dayli: Voice-First Calendar Agent with Policy-Gated Writes** · *2026* · [code](https://github.com/rameezshafat/dayli)  
*Python · Llama 3.2 · Whisper · Kokoro · Google Calendar API*

* Agents that write to real APIs can double-book or delete events when nothing checks an action first.
* Built a voice-first calendar agent (local Llama 3.2, Whisper, Kokoro) that writes only approved proposals.
* Gated every write with TOML policy-as-code and retry-safe IDs; **124 tests** and **89%** intent accuracy.

**Incident Root-Cause Analysis Agent**  
*Python · Agentic retrieval · Evaluation*

* On-call engineers lose time stepping through logs, metrics and deploy history before they find a root cause.
* Built an iterative investigation agent that, on 360 synthetic incidents, raised root-cause accuracy from **19.7%** to **66.1%**.
* Cut average investigation steps from 6.0 to **3.3** using planned retrieval, confidence gating and escalation when evidence runs out.

**RAG System for Technical Documentation (GitMagic Guide)**  
*Python · LLMs · Retrieval pipelines*

* Built an end-to-end RAG pipeline covering document processing, embeddings and retrieval orchestration, split into modules so each stage can be swapped.

**AI Sentiment Analysis Accuracy Comparator**  
*LLM APIs · Evaluation*

* Built an evaluation tool that compares several LLM APIs on the same labelled datasets, with live testing and repeatable runs.

### Data Engineering

**SQL Data Warehouse Platform** · *Nineleaps, 2025* · [code](https://github.com/rameezshafat/postgres-medallion-data-warehouse)  
*PostgreSQL · SQL · ETL · Medallion architecture*

* Six operational sources reported different numbers for the same thing, so every report needed a manual re-check.
* Built a validated PostgreSQL warehouse on medallion architecture, cutting manual data preparation effort by **35%**.
* Applied cleaning, matching, integrity constraints and quality checks at each layer, so every figure traces to its source.

**Bike Sales Data Lakehouse** · *Databricks* · [code](https://github.com/rameezshafat/databricks-medallion-lakehouse)  
*PySpark · Spark SQL · Delta Lake · Unity Catalog*

* CRM and ERP exports used mismatched customer IDs, coded values and integer dates, so they could not be joined directly.
* Built a 15-table bronze/silver/gold Delta lakehouse turning ~60K sales lines and ~18.5K customers into a star schema.
* Found and fixed a join bug that inflated `fact_sales` by **49%**, and added 7 quality checks that fail the run on bad data.

### Machine Learning & Computer Vision

**Identity-Aware Fraud Detection** · *DCU MSc Coursework* · [code](https://github.com/rameezshafat/ieee-cis-fraud-feature-engineering)  
*Python · LightGBM · XGBoost · CatBoost · Feature engineering*

* Transactions carry no reliable cardholder ID, so identity has to be inferred before any pattern shows up.
* Built a leakage-safe pipeline over **590K+** transactions around a composite UID, reaching **0.947 ROC-AUC**.

**Hybrid CNN–Vision Transformer for Diabetic Retinopathy Detection** · *IEEE ICBMESH 2025*  
*PyTorch · EfficientNet-B0 · Swin Transformer*

* Combined EfficientNet-B0 features with a Swin Transformer for retinopathy severity grading, reaching **85.5%** accuracy on APTOS 2019.

**Loan Default Prediction**  
*Scikit-learn · Imbalanced learning*

* Reached **0.93 AUC-ROC** with a tuned Random Forest, then moved the decision threshold to catch more of the minority (default) class.

**Earthquake Clustering with DBSCAN** · [code](https://github.com/rameezshafat/earthquake-clustering-using-dbscan)  
*Scikit-learn · GeoPandas · Folium*

* Clustered **75,810** USGS earthquake events by location with DBSCAN and mapped the clusters interactively with Folium.

**FashionMNIST CNN**  
*PyTorch*

* Built the data pipeline, training loop and evaluation for a CNN classifier reaching **89.5%** accuracy.

### Systems & 3D

**Multi-Client Chat Server**  
*C · TCP/IP sockets · Concurrency*

* Wrote a socket-based chat server in C that handles multiple clients concurrently over TCP.

**Dublin Retrofit 3D Prototype (Unity)** · [code](https://github.com/rameezshafat/dublin-retrofit-xr)  
*Unity 6 · C# · OpenStreetMap*

* Extruded **690** OpenStreetMap building footprints in Glasnevin into 3D, with click-to-inspect energy ratings (sample data) and 8 passing tests.

---

## Skills

* **Languages:** Python, SQL, C, C#, JavaScript
* **ML / AI:** Classification, ensembles, deep learning, transformers, information retrieval, RAG, LLM agents, evaluation design
* **Data Engineering:** PostgreSQL, ETL, medallion architecture, Databricks, PySpark, Delta Lake, data-quality checks
* **Libraries & Tools:** PyTorch, scikit-learn, pandas, NumPy, FAISS, FastAPI, Git, Docker, Linux
* **Systems:** Operating systems, computer networks, socket programming, system design

---

## Currently

* Graduated from DCU with a First Class (1:1) MSc in Artificial Intelligence (20 Oct 2026)
* Teaching mathematics at DCU
* Open to **data, ML, AI and systems-oriented roles**, and to research positions
