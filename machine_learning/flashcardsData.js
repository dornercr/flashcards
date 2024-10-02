const topicTitles = {
  intro: "Introduction to Machine Learning",
  mlBasics : "Machine Learning Basics",
  mlAlgorithms: "Machine Learning Algorithms",
  supervisedLearning : "Supervised Learning",
  //oop: "Object Oriented Programming",
  //sortingAlgorithms: "Sorting Algorithms",
  //mathMLConceptsMnemonics: "Math ML Concepts Mnemonics",
  //Chapter1_PythonBasicsMnemonics: "Python Basics Mnemonics",
  //pythonBuiltinFunctions: "Python BuiltinFunctions",
  //pandasOperations: "Pandas Operations",
  //numpyOperations: "Numpy Operations",



};

const flashcardsData = {
  intro: [
    {
      question: "WDML: Whales Dive, Machines Learn",
      answer: "W - Work: Tasks without explicit programming\nD - Data: Relies on data\nM - Model: Processes data\nL - Learn: Improves with experience\n\n```\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "STML: Squirrels Take Many Leaps",
      answer: "S - Select: Algorithm choice\nT - Train: Train the model\nM - Measure: Performance\nL - Learn: Improves with data\n\n```\nmodel = SomeModel()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "FTML: Frogs Travel Many Lands",
      answer: "F - Finance: Stock prediction\nT - Transportation: Autonomous vehicles\nM - Medicine: Disease diagnosis\nL - Logistics: Supply chain management\n\nMachine learning solves real-world problems."
    },
    {
      question: "TPML: Turtles Pace Many Laps",
      answer: "T - Classification: Sorts data\nP - Prediction: Future outcomes\nM - Clustering: Groups data\nL - Anomaly Detection: Finds outliers\n\nML models solve these problems."
    },
    {
      question: "SKML: Snakes Know Many Lessons",
      answer: "S - Supervised: Labeled data\nK - Known: Labels are known\nM - Model: Learns input-output mapping\nL - Labels: Relies on labeled data\n\n```\ntrain_test_split(X, y)\n```"
    },
    {
      question: "UMSA: Unicorns Move Swiftly Always",
      answer: "U - Unlabeled: Learns from unlabeled data\nM - Model: Discovers patterns\nS - Segmentation: Customer segmentation\nA - Algorithms: Clustering, PCA\n\n```\nKMeans(n_clusters=3)\n```"
    },
    {
      question: "TPST: Tigers Prowl Slowly Today",
      answer: "T - Train: Labeled data\nP - Predict: Predict input\nS - Score: Evaluate predictions\nT - Tune: Improve performance\n\n```\nmodel.score(X_test, y_test)\n```"
    },
    {
      question: "DMST: Dogs Must Stay Trained",
      answer: "D - Data: Foundation of ML\nM - Must: Data preparation\nS - Structured: Organized format\nT - Transform: Feature engineering\n\n```\nStandardScaler()\n```"
    },
    {
      question: "ELML: Eagles Learn Many Lessons",
      answer: "E - Evaluate: Test data\nL - Loss: Measures error\nM - Metrics: Accuracy, Precision\nL - Learn: Improves through feedback\n\n```\naccuracy_score(y_test, y_pred)\n```"
    },
    {
      question: "TTSM: Turtles Teach Snails Movement",
      answer: "T - Train: Training set\nT - Test: Evaluation set\nS - Split: Prevent overfitting\nM - Model: Trained on train, evaluated on test\n\n```\ntrain_test_split(X, y)\n```"
    },
    {
      question: "OTFL: Owls Take Flight Low",
      answer: "O - Overfitting: Memorizes data\nT - Training: Works too well on training data\nF - Fit: Too complex\nL - Learn: Simplify to reduce overfitting\n\n```\nDecisionTreeClassifier(max_depth=3)\n```"
    },
    {
      question: "FMLC: Foxes Make Life Clear",
      answer: "F - Features: Input variables\nM - Model: Processes features\nL - Label: Target prediction\nC - Cleaning: Ensures data quality\n\n```\nX = data.drop(columns=['target'])\n```"
    },
    {
      question: "MMRL: Mice Must Run Lightly",
      answer: "M - Model: Minimizes error\nM - Minimize: Optimization\nR - Regularization: Prevent overfitting\nL - Loss: Measures error\n\n```\nmean_squared_error(y_true, y_pred)\n```"
    },
    {
      question: "CVES: Cats Verify Every Step",
      answer: "C - Cross-Validation: Evaluate performance\nV - Validation: Splits data\nE - Evaluation: Across test sets\nS - Score: Average performance\n\n```\ncross_val_score(model, X, y, cv=5)\n```"
    },
    {
      question: "KBKF: Kangaroos Bounce, Kittens Follow",
      answer: "K - K-Means: Clustering\nB - Centroid: Mean of points\nK - k: Number of clusters\nF - Fitting: Assigns points to nearest centroid\n\n```\nKMeans(n_clusters=3)\n```"
    },
    {
      question: "PCLS: Penguins Climb Large Steps",
      answer: "P - Principal: PCA for dimensionality reduction\nC - Components: Linear combinations\nL - Linear: Transformation\nS - Simplify: Preserve variance\n\n```\nPCA(n_components=2)\n```"
    },
    {
      question: "LMCV: Lions Make Careful Visits",
      answer: "L - Linear: Models linear relationships\nM - Model: Linear/logistic regression\nC - Cross Validation: Prevent overfitting\nV - Validate: Measure performance\n\n```\nLinearRegression()\n```"
    },
    {
      question: "SCSM: Seals Catch Salty Minnows",
      answer: "S - Support: Vectors define boundary\nC - Classification: For classification tasks\nS - Separability: Handles separable data\nM - Margin: Maximizes class separation\n\n```\nSVC(kernel='linear')\n```"
    },
    {
      question: "NNBP: New Neurons Build Power",
      answer: "N - Neural: Simulates brain neurons\nN - Networks: Layers connected by weights\nB - Backpropagation: Updates weights\nP - Predict: For classification or regression\n\n```\nSequential()\nDense(128, activation='relu')\n```"
    },
    {
      question: "FFNR: Ferrets Find New Routes",
      answer: "F - Fit: Fits data without overfitting\nF - Fast: Efficient training\nN - Noisy: Robust against noise\nR - Regularized: Avoid overfitting\n\n```\nRidge(alpha=1.0)\n```"
    },
    {
      question: "GBEM: Goats Build Every Mountain",
      answer: "G - Gradient: Minimizes gradient\nB - Boosting: Combines weak learners\nE - Ensemble: Increases accuracy\nM - Model: Decision trees as base learners\n\n```\nGradientBoostingClassifier()\n```"
    },
    {
      question: "RFSE: Rabbits Find Sweet Edibles",
      answer: "R - Random: Uses random feature subsets\nF - Forest: Many decision trees\nS - Split: Data split at each node\nE - Ensemble: Combines tree predictions\n\n```\nRandomForestClassifier()\n```"
    },
    {
      question: "KNNS: Kangaroos Need No Supervision",
      answer: "K - k-NN: Classifies by nearest neighbors\nN - Neighbors: Closest data points\nN - Non-parametric: No data assumptions\nS - Supervised: Uses labeled data\n\n```\nKNeighborsClassifier(n_neighbors=3)\n```"
    },
    {
      question: "LRCS: Lemurs Run Carefully Still",
      answer: "L - Logistic Regression: Binary classification\nR - Regression: Maps inputs to probabilities\nC - Classify: Predicts binary outcomes\nS - Sigmoid: Uses sigmoid function\n\n```\nLogisticRegression()\n```"
    },
    {
      question: "DMFS: Deer Move Fast Swiftly",
      answer: "D - Decision Trees: Tree structure classifier\nM - Model: For classification/regression\nF - Feature: Splits by important features\nS - Splitting: Uses Gini/information gain\n\n```\nDecisionTreeClassifier()\n```"
    },
    {
      question: "ADBM: All Ducks Build Models",
      answer: "A - AdaBoost: Boosting algorithm\nD - Decision Trees: As weak learners\nB - Boosting: Combines weak learners\nM - Model: Focuses on errors\n\n```\nAdaBoostClassifier()\n```"
    },
    {
      question: "FFAF: Flamingos Fly Above Forests",
      answer: "F - Features: Input data\nF - Feature Engineering: Improves performance\nA - Accuracy: High-quality features\nF - Fit: Better fit with processed features\n\n```\npd.get_dummies(X, columns=['category'])\n```"
    },
    {
      question: "GNBP: Giraffes Nibble Big Plants",
      answer: "G - Gaussian: Normal data distribution\nN - Naive: Independence between features\nB - Bayes: Based on Bayes' Theorem\nP - Probabilities: Predicts class probabilities\n\n```\nGaussianNB()\n```"
    },
    {
      question: "SBSV: Swans Balance Small Vessels",
      answer: "S - Supervised Learning: Model learns from labeled data\nB - Bias: Model may oversimplify data\nS - Split: Data split into train/test sets\nV - Validation: Fine-tuning via validation set\n\n```\ntrain_test_split(X, y)\n```"
    },
    {
      question: "UBLK: Unicorns Balance Large Kites",
      answer: "U - Unsupervised Learning: Model learns from unlabeled data\nB - Clustering: Groups similar data points\nL - Learn: Model identifies patterns\nK - K-Means: Popular clustering algorithm\n\n```\nKMeans(n_clusters=3)\n```"
    },
    {
      question: "MLER: Monkeys Leap Every Ridge",
      answer: "M - Metrics: Accuracy, precision, recall, F1 score\nL - Loss: Measures prediction error\nE - Evaluation: Assesses model performance\nR - ROC Curve: Tool for binary classifiers\n\n```\nf1_score(y_true, y_pred)\n```"
    },
    {
      question: "SSNL: Snakes See Night Lights",
      answer: "S - Semi-Supervised Learning: Combines labeled and unlabeled data\nS - Supervised: Uses a small portion of labeled data\nN - Not Labeled: Most data is unlabeled\nL - Learning: Model learns from both data types\n\nSemi-supervised learning helps when labeled data is scarce."
    },
    {
      question: "BDSC: Beavers Dig Strong Channels",
      answer: "B - Bias: Model may reflect data biases\nD - Data: High-quality labeled data is critical\nS - Supervised: Learns from labeled data\nC - Classification: Assigns data points to classes\n\n```\ntrain_test_split(X, y)\n```"
    },
    {
      question: "RLCS: Raccoons Learn Clever Skills",
      answer: "R - Reinforcement Learning: Model learns through rewards and penalties\nL - Learn: Optimizes actions\nC - Control: Commonly used for control tasks\nS - States: Learns by interacting with the environment\n\nReinforcement learning is used in game AI and robotics."
    },
    {
      question: "Supervised Learning (Classification): Lazy Neighbors Keep Staying Lazy",
      answer: "L - Logistic Regression (LR): Binary classification\nN - Naive Bayes (NB): Probabilistic classifier using Bayes' Theorem\nK - K-Nearest Neighbor (K-NN): Labels based on closest data points\nS - Support Vector Machine (SVM): Hyperplane separation\nL - Linear Regression (LR): Models relationship between dependent and independent variables\n\n```\nExamples:\nLogistic Regression - Spam detection\nNaive Bayes - Text classification\nK-NN - Image recognition\nSVM - Speech recognition\nLinear Regression - Stock prediction\n```"
    },
    {
      question: "Supervised Learning (Regression): Runners Often Stretch",
      answer: "R - Ridge Regression (RR): Reduces overfitting in linear models\nO - Ordinary Least Squares (OLS): Minimizes squared differences between actual and predicted\nS - Stepwise Regression (SR): Adds/removes predictors to optimize model\n\n```\nExamples:\nRidge Regression - Housing prices\nOLS - Economic forecasting\nStepwise Regression - Rainfall prediction\n```"
    },
    {
      question: "Unsupervised Learning (Clustering): Kids Keep Helping Everyone Progress",
      answer: "K - K-means: Partitions data into clusters\nK - K-median: Minimizes distance to the median\nH - Hierarchical Clustering: Builds a cluster tree\nE - Expectation Maximization (EM): Finds clusters using probabilistic models\nP - Principal Component Analysis (PCA): Reduces features while retaining key information\n\n```\nExamples:\nK-means - Fake news detection\nK-median - Customer segmentation\nHierarchical Clustering - Document analysis\nEM - Image segmentation\nPCA - DNA analysis\n```"
    },
    {
      question: "Unsupervised Learning (Association and Dimensionality Reduction): All Elephants Find Features Fast",
      answer: "A - APRIORI: Mines frequent itemsets and association rules\nE - Eclat: Depth-first search for itemsets\nF - FP-Growth: Faster alternative to APRIORI\nF - Feature Extraction: Reduces dataset features\nF - Feature Selection: Chooses relevant features for model performance\n\n```\nExamples:\nAPRIORI - Market basket analysis\nEclat - Product associations\nFP-Growth - Shopping analysis\nFeature Extraction - Text analysis\nFeature Selection - Gene selection in bioinformatics\n```"
    },
    {
      question: "Reinforcement Learning (Model-Free and Model-Based): Quick Horses Practice Learning Games",
      answer: "Q - Q-Learning: Finds best action based on current state\nH - Hybrid: Combines model-free and model-based\nP - Policy Optimization: Improves agent policy to maximize rewards\nL - Learn the Model: Creates model of the environment for decision-making\nG - Given the Model: Uses a pre-existing model for decisions\n\n```\nExamples:\nQ-Learning - Chess AI\nHybrid - Policy optimization in simulations\nPolicy Optimization - Robotics control\nLearn the Model - Autonomous vehicles\nGiven the Model - Traffic management\n```"
    }
],
  mlBasics: [
    {
      "question": "DTMP: Dogs Travel Many Paths",
      "answer": "D - Data: Foundation of machine learning\nT - Training: Process of teaching the model\nM - Model: The algorithm making predictions\nP - Predictions: Output of the model\n\n```\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\n```"
    },
    {
      "question": "FFMS: Frogs Find Many Solutions",
      "answer": "F - Features: Input variables\nF - Fitting: Adjusting model to training data\nM - Model: Mathematical structure for learning\nS - Score: Measures model performance\n\n```\nmodel.fit(X_train, y_train)\nscore = model.score(X_test, y_test)\n```"
    },
    {
      "question": "LTLF: Lions Take Long Falls",
      "answer": "L - Labels: Output values model predicts\nT - Training: Learning from labeled data\nL - Loss: Error between predictions and actuals\nF - Fitting: Reducing loss to improve predictions\n\n```\nmean_squared_error(y_true, y_pred)\n```"
    },
    {
      "question": "ALVM: Apples Love Vanilla Milk",
      "answer": "A - Algorithm: Method model uses to learn\nL - Learning: Adjusting based on data\nV - Validation: Check performance on unseen data\nM - Metrics: Evaluate model quality\n\n```\ntrain_test_split(X, y)\n```"
    },
    {
      "question": "TSVL: Tigers Seek Vast Lands",
      "answer": "T - Train-Test Split: Divides data for training/testing\nS - Split: Dividing data\nV - Validation: Tuning with test data\nL - Learn: Model learns from training data\n\n```\ntrain_test_split(X, y, test_size=0.2)\n```"
    },
    {
      "question": "MKPL: Monkeys Keep Picking Leaves",
      "answer": "M - Model: Learning algorithm for predictions\nK - K-fold Cross Validation: Splits data for evaluation\nP - Predictions: Model outputs\nL - Loss: Error between actual and predicted\n\n```\ncross_val_score(model, X, y, cv=5)\n```"
    },
    {
      "question": "FGBC: Frogs Glide By Clouds",
      "answer": "F - Feature Scaling: Normalizes input features\nG - Gradient Descent: Optimizes by minimizing loss\nB - Batch: Process data subsets\nC - Cost Function: Measures prediction error\n\n```\nStandardScaler()\nX_scaled = scaler.fit_transform(X)\n```"
    },
    {
      "question": "BNFS: Bears Need Food Slowly",
      "answer": "B - Bias: Error from oversimplified assumptions\nN - Noise: Random data variation\nF - Feature: Input data\nS - Standardization: Rescale features to zero mean/unit variance\n\n```\nX_standardized = (X - X.mean()) / X.std()\n```"
    },
    {
      "question": "MCPT: Mice Carry Paper Towels",
      "answer": "M - Mean: Average value\nC - Correlation: Relation between variables\nP - Probability: Likelihood of events\nT - Training: Learning from data\n\n```\ncorrelation = df.corr()\n```"
    },
    {
      "question": "OVFC: Owls View Forests Clearly",
      "answer": "O - Overfitting: Model fits training data too well\nV - Validation: Detects overfitting\nF - Features: Input attributes\nC - Cross Validation: For better accuracy\n\n```\ntrain_test_split(X, y)\n```"
    },
    {
      "question": "RRCM: Red Robins Catch Mice",
      "answer": "R - Regression: Predicts continuous values\nR - Regularization: Penalizes complex models\nC - Coefficients: Weights for features\nM - Mean Squared Error: Loss function for regression\n\n```\nRidge(alpha=1.0)\n```"
    },
    {
      "question": "SLDC: Snakes Like Dark Caves",
      "answer": "S - Supervised Learning: Training on labeled data\nL - Labels: Known outputs\nD - Decision Trees: Classification model\nC - Classification: Categorizes data into labels\n\n```\nDecisionTreeClassifier()\n```"
    },
    {
      "question": "KLSS: Kangaroos Love Short Stints",
      "answer": "K - k-NN: Classifies based on nearest neighbors\nL - Labels: Output to predict\nS - Split: Divide data into train/test sets\nS - Score: Model performance evaluation\n\n```\nKNeighborsClassifier(n_neighbors=3)\n```"
    },
    {
      "question": "PRLM: Pigs Run Long Miles",
      "answer": "P - Precision: Relevant selected items\nR - Recall: Relevant items selected\nL - Learning: Training the model\nM - Metrics: Model evaluation tools\n\n```\nprecision_score, recall_score\n```"
    },
    {
      "question": "RCBL: Raccoons Climb Big Logs",
      "answer": "R - Regularization: Prevent overfitting\nC - Classification: Categorize data into labels\nB - Binary: Two output classes\nL - Logistic Regression: Binary classification\n\n```\nLogisticRegression()\n```"
    },
    {
      "question": "LBCG: Lions Build Cozy Garages",
      "answer": "L - Logistic Regression: Binary classification\nB - Binary: Two possible outputs\nC - Classifier: Predicts class of input\nG - Gradient Descent: Optimizes coefficients\n\n```\nLogisticRegression()\n```"
    },
    {
      "question": "PCFS: Parrots Can Fly South",
      "answer": "P - Precision: Relevant retrieved instances\nC - Classification: Data categorization\nF - F1 Score: Combines precision/recall\nS - Sensitivity: Another term for recall\n\n```\nf1_score\n```"
    },
    {
      "question": "NNLS: New Nests Look Shiny",
      "answer": "N - Neural Networks: Brain-inspired models\nN - Nodes: Neurons in the network\nL - Layers: Groups of nodes\nS - Sigmoid: Activation function\n\n```\nDense(64, activation='sigmoid')\n```"
    },
    {
      "question": "LRFC: Lions Roar For Cubs",
      "answer": "L - Logistic Regression: Binary classification\nR - ROC Curve: True/false positive plot\nF - F1 Score: Harmonic mean of precision/recall\nC - Confusion Matrix: Displays model predictions\n\n```\nroc_curve, f1_score\n```"
    },
    {
      "question": "GBLC: Great Bears Like Climbing",
      "answer": "G - Gradient Boosting: Boosting algorithm\nB - Boosting: Improves weak learners\nL - Loss: Prediction error\nC - Classification: Label categorization\n\n```\nGradientBoostingClassifier()\n```"
    },
    {
      "question": "EMBD: Eagles Migrate Before Dawn",
      "answer": "E - Ensemble: Combines models\nM - Model: Base learners in ensemble\nB - Bagging: Creates multiple models\nD - Decision Trees: Common base learners\n\n```\nBaggingClassifier()\n```"
    },
    {
      "question": "APLP: All Pandas Love Parties",
      "answer": "A - Accuracy: Percentage of correct predictions\nP - Precision: Relevant selected items\nL - Logistic Regression: Binary classification\nP - Predictions: Model output\n\n```\naccuracy_score, precision_score\n```"
    },
    {
      "question": "DTCM: Dogs Try Chasing Mice",
      "answer": "D - Decision Trees: Popular classification model\nT - Trees: Splits data on features\nC - Classification: Label categorization\nM - Model: Predictive algorithm\n\n```\nDecisionTreeClassifier()\n```"
    },
    {
      "question": "SSLT: Snakes Slide Long Trails",
      "answer": "S - Supervised Learning: Training with labels\nS - Split: Divide data into train/test\nL - Loss: Error between predictions and actuals\nT - Train-Test Split: Method for dividing data\n\n```\ntrain_test_split()\n```"
    },
    {
      "question": "SVMT: Seals Visit Many Tides",
      "answer": "S - Support Vector Machines: Classification model\nV - Vectors: Points defining decision boundary\nM - Margin: Distance between boundary and closest points\nT - Training: Learn boundary from data\n\n```\nSVC()\n```"
    },
    {
      "question": "RBRF: Rabbits Build Rocky Forts",
      "answer": "R - Random Forest: Ensemble of decision trees\nB - Bagging: Combine multiple trees\nR - Random: Random subsets for training\nF - Features: Input variables\n\n```\nRandomForestClassifier()\n```"
    },
    {
      "question": "KMCS: Kangaroos Make Cool Slides",
      "answer": "K - k-Means: Clustering algorithm\nM - Mean: Represents each cluster\nC - Centroid: Center of a cluster\nS - Split: Data split by centroids\n\n```\nKMeans(n_clusters=3)\n```"
    },
    {
      "question": "PCTM: Parrots Chirp To Music",
      "answer": "P - PCA: Dimensionality reduction technique\nC - Components: New axes based on variance\nT - Transform: Project data onto components\nM - Mean: Center principal component at zero\n\n```\nPCA(n_components=2)\n```"
    },
    {
      "question": "TPRL: Tigers Play Real Loud",
      "answer": "T - Train-Test Split: Divides data\nP - Precision: Relevant retrieved instances\nR - Recall: Relevant items selected\nL - Logistic Regression: Binary classification\n\n```\ntrain_test_split()\n```"
    },
    {
      "question": "GLCF: Giraffes Like Climbing Fences",
      "answer": "G - Gradient Descent: Optimizes model by reducing loss\nL - Logistic Regression: Binary classification\nC - Classification: Categorizes data\nF - Features: Input variables\n\n```\nLogisticRegression()\n```"
    },
    {
      "question": "ASVC: All Seals Visit Cliffs",
      "answer": "A - Accuracy: Correct predictions percentage\nS - Support Vector Machines: Classification model\nV - Vectors: Data defining decision boundary\nC - Classification: Label categorization\n\n```\nSVC()\n```"
    },
    {
      "question": "BSVD: Bats See Very Dark",
      "answer": "B - Bagging: Combines models for better performance\nS - Support Vector Machines: Classification model\nV - Vectors: Define decision boundary\nD - Decision Trees: Common base learners\n\n```\nBaggingClassifier(base_estimator=SVC())\n```"
    }

  ],

  mlAlgorithms: [
    {
      "question": "SLTL: Sheep Learn Through Loss",
      "answer": "S - Supervised: Learning with labeled data\nL - Labels: Data tagged with the correct output\nT - Training: The model learns by comparing predictions to actual labels\nL - Loss Function: Measures error between predicted and actual outputs\n\n```\ny_true = [1, 0, 1]\ny_pred = [0.9, 0.1, 0.8]\nloss = mean_squared_error(y_true, y_pred)\n```"
    },
    {
      "question": "KCFK: Kangaroos Chase Fast Kites",
      "answer": "K - k-NN: Finds the closest points for classification\nC - Closeness: Uses distance measures like Euclidean\nF - Features: Uses features to calculate similarity\nK - K-value: Number of nearest neighbors considered\n\n```\nfrom sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=3)\n```"
    },
    {
      "question": "SGBT: Snakes Glide By Trees",
      "answer": "S - Stochastic: Stochastic Gradient Boosting builds weak learners\nG - Gradient: Minimizes the error using gradient descent\nB - Boosting: Combines weak models to create a strong learner\nT - Trees: Often uses decision trees as base learners\n\n```\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\n```"
    },
    {
      "question": "RRML: Rabbits Run Many Laps",
      "answer": "R - Regression: Models relationship between input/output\nR - Residual: Difference between predicted and actual values\nM - Mean Squared Error: Common loss function for regression\nL - Linearity: Assumes a linear relationship between features and output\n\n```\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\n```"
    },
    {
      "question": "DLBL: Ducks Learn By Layers",
      "answer": "D - Deep: Uses multiple layers of neural networks\nL - Layers: Networks have input, hidden, output layers\nB - Backpropagation: Adjusts weights by propagating error backward\nL - Learning Rate: Controls weight adjustment magnitude\n\n```\nmodel = Sequential()\nmodel.add(Dense(64, activation='relu'))\nmodel.compile(optimizer='adam', loss='categorical_crossentropy')\n```"
    },
    {
      "question": "LRSM: Lions Run Swiftly Midday",
      "answer": "L - Logistic Regression: Classifies binary outcomes\nR - Regression: Maps inputs to predicted probabilities\nS - Sigmoid: Converts output to probabilities\nM - Maximum Likelihood: Optimizes parameters to best fit data\n\n```\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\n```"
    },
    {
      "question": "RFDT: Red Foxes Dig Tunnels",
      "answer": "R - Random: Randomly selects data and features for tree construction\nF - Forest: Combines many decision trees for better accuracy\nD - Decision Trees: Base learners for random forest\nT - Training: Trains multiple trees and averages outputs\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    },
    {
      "question": "SVCG: Snakes View Clouds Gracefully",
      "answer": "S - Support: Support vectors help define decision boundaries\nV - Vectors: Data points closest to boundary\nC - Classification: Commonly used for classification\nG - Gaussian: Radial Basis Function kernel often used\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC(kernel='rbf')\n```"
    },
    {
      "question": "NNAL: New Nests Are Large",
      "answer": "N - Neural: Mimics human brain structure\nN - Networks: Layers of neurons connected by weights\nA - Activation: Functions introduce non-linearity (ReLU, sigmoid)\nL - Learning: Weights updated through backpropagation\n\n```\nmodel.add(Dense(128, activation='relu'))\n```"
    },
    {
      "question": "DBDC: Dogs Bark During Chaos",
      "answer": "D - Decision Trees: Model decisions with tree-like structures\nB - Binary Splits: Splits data into two parts\nD - Depth: Limits tree depth to avoid overfitting\nC - Classification: Commonly used for classification\n\n```\nfrom sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier()\n```"
    },
    {
      "question": "GNBP: Goats Nap By Pools",
      "answer": "G - Gaussian: Assumes normal distribution of data\nN - Naive Bayes: Simple probabilistic classifier\nB - Bayes' Theorem: Calculates conditional probabilities\nP - Prior: Assumes independence between features\n\n```\nfrom sklearn.naive_bayes import GaussianNB\nmodel = GaussianNB()\n```"
    },
    {
      "question": "GBBD: Great Bears Build Dams",
      "answer": "G - Gradient: Optimizes based on the gradient of the loss function\nB - Boosting: Sequentially trains models with weight updates\nB - Bias: Reduces bias of weak learners\nD - Decision Trees: Trees are often used as weak learners\n\n```\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\n```"
    },
    {
      "question": "MLPK: Monkeys Like Peeling Kiwis",
      "answer": "M - Multi-layer: Multiple layers in the network\nL - Perceptron: Perceptron acts as a neuron in the network\nP - Parallel: Neurons work in parallel in each layer\nK - Knowledge: Backpropagation helps update and refine knowledge\n\n```\nfrom sklearn.neural_network import MLPClassifier\nmodel = MLPClassifier()\n```"
    },
    {
      "question": "DBDC: Dogs Bark During Chaos",
      "answer": "D - Decision Trees: Models decisions with tree-like structures\nB - Binary Splits: Each node splits data into two parts\nD - Depth: Tree depth limits overfitting\nC - Classification: Commonly used for classification tasks\n\n```\nfrom sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier()\n```"
    },
    {
      "question": "KNNN: Kangaroos Need New Neighbors",
      "answer": "K - k-Nearest Neighbors: Classifies based on nearest neighbors\nN - Neighbors: Considers a set of nearest data points\nN - Numeric: Works well with numeric data\nN - Non-parametric: Makes no assumptions about data distribution\n\n```\nfrom sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=5)\n```"
    },
    {
      "question": "LRCG: Lemurs Rest Calmly Grazing",
      "answer": "L - Lasso: Regression model that adds L1 regularization\nR - Regularization: Reduces model complexity by adding penalty\nC - Coefficients: Shrinks coefficients towards zero\nG - Gradient: Uses gradient descent to optimize coefficients\n\n```\nfrom sklearn.linear_model import Lasso\nmodel = Lasso(alpha=0.1)\n```"
    },
    {
      "question": "SVDD: Seals Visit Deep Dives",
      "answer": "S - Support Vector: SVDD for outlier detection using support vectors\nV - Vectors: Define boundary that encloses most of the data\nD - Domain: Finds the minimal enclosing domain\nD - Detection: Detects outliers as points lying outside the boundary\n\n```\nfrom sklearn.svm import OneClassSVM\nmodel = OneClassSVM()\n```"
    },
    {
      "question": "SARIM: Sparrows Always Return In May",
      "answer": "S - Seasonal: Accounts for seasonality in time series data\nA - Autoregressive: Incorporates past values in prediction\nR - Regressive: Uses lagged terms to model the data\nI - Integrated: Differencing applied to make the series stationary\nM - Moving Average: Uses past forecast errors for predictions\n\n```\nfrom statsmodels.tsa.statespace.sarimax import SARIMAX\nmodel = SARIMAX(data, order=(1,1,1), seasonal_order=(1,1,1,12))\n```"
    },
    {
      "question": "PCAP: Penguins Can Ascend Peaks",
      "answer": "P - Principal: Principal component analysis reduces dimensionality\nC - Components: New features are linear combinations of old ones\nA - Analysis: Reduces data complexity while preserving variance\nP - Projection: Projects data onto new axes\n\n```\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=2)\n```"
    },
    {
      "question": "EMED: Elephants Move Every Day",
      "answer": "E - Ensemble: Combines multiple weak models to form a strong one\nM - Models: Models like decision trees are used\nE - Error Reduction: Reduces overall error by averaging models\nD - Diversity: Relies on model diversity for better performance\n\n```\nfrom sklearn.ensemble import BaggingClassifier\nmodel = BaggingClassifier()\n```"
    },
    {
      "question": "RFRO: Rabbits Follow Rivers Out",
      "answer": "R - Random: Random subset of features used to build trees\nF - Forest: Ensemble of decision trees improves accuracy\nR - Randomized Splits: Features are selected randomly at each split\nO - Out-of-Bag: Evaluates model using out-of-bag samples\n\n```\nfrom sklearn.ensemble import RandomForestRegressor\nmodel = RandomForestRegressor()\n```"
    },
    {
      "question": "GNBP: Goats Nap By Pools",
      "answer": "G - Gaussian: Assumes normal distribution of data\nN - Naive Bayes: Simple probabilistic classifier\nB - Bayes' Theorem: Calculates conditional probabilities\nP - Prior: Assumes independence between features\n\n```\nfrom sklearn.naive_bayes import GaussianNB\nmodel = GaussianNB()\n```"
    },
    {
      "question": "ADBD: All Dogs Bark Dangerously",
      "answer": "A - AdaBoost: Boosts weak learners adaptively\nD - Decision Trees: Commonly uses decision trees as base models\nB - Boosting: Sequentially adjusts weights to improve performance\nD - Diversity: Enhances model performance by adding diversity\n\n```\nfrom sklearn.ensemble import AdaBoostClassifier\nmodel = AdaBoostClassifier()\n```"
    }
  ],

  supervisedLearning: [
    {
      question: "What is Supervised Learning?",
      answer: "Algorithms learn from labeled data to predict outcomes.\n\nExample: Email spam classification."
    },
    {
      question: "Why is Supervised Learning important?",
      answer: "Powers AI tasks like spam detection, recommendation systems, and medical diagnosis.\n\nExample: Predicting customer churn."
    },
    {
      question: "What are the two types of Supervised Learning?",
      answer: "Classification (categorizes) and Regression (predicts continuous values).\n\nExample: Classifying emails, predicting house prices."
    },
    {
      question: "What are the main components of Supervised Learning?",
      answer: "Input features (data variables) and target labels (predicted outcomes).\n\nCode Example:\n```python\nX = data[['age', 'income']]\ny = data['purchase']\n```"
    },
    {
      question: "What are the key steps in the Supervised Learning process?",
      answer: "Collect data, split, train, evaluate, deploy.\n\nExample: Splitting dataset for training and testing.\nCode Example:\n```python\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y)\n```"
    },
    {
      question: "What's the difference between Classification and Regression?",
      answer: "Classification: categories. Regression: continuous values.\n\nExample: Classify emails, predict stock prices."
    },
    {
      question: "Name some popular Supervised Learning algorithms.",
      answer: "Logistic Regression, Decision Trees, Random Forests, SVM.\n\nCode Example:\n```python\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "What is Data Preprocessing in Supervised Learning?",
      answer: "Cleans and transforms raw data for training (handles missing values, scales features).\n\nCode Example:\n```python\nfrom sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n```"
    },
    {
      question: "What is Feature Engineering?",
      answer: "Creates new features to improve model performance.\n\nExample: Combining age and income into a new feature.\nCode Example:\n```python\ndata['age_income_ratio'] = data['age'] / data['income']\n```"
    },
    {
      question: "What are common metrics for evaluating models?",
      answer: "Accuracy, precision, recall, F1-score, confusion matrix.\n\nCode Example:\n```python\nfrom sklearn.metrics import accuracy_score\naccuracy = accuracy_score(y_test, y_pred)\n```"
    },
    {
      question: "What are some challenges in Supervised Learning?",
      answer: "Data quality, overfitting, imbalanced data.\n\nExample: Handling missing values or overfitting with too much data."
    },
    {
      question: "What are some future trends in Supervised Learning?",
      answer: "Transfer learning, AutoML, fairness in AI.\n\nExample: Using pre-trained models to speed up learning."
    },
    {
      question: "What is Logistic Regression used for in supervised learning?",
      answer: "Used for binary classification, modeling probability of input belonging to one of two classes.\n\nExample: Spam or not spam.\nCode Example:\n```python\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "How do Decision Trees work in supervised learning?",
      answer: "Splits data into subsets based on features, forming a tree for predictions in classification and regression.\n\nExample: Predicting loan approval.\nCode Example:\n```python\nfrom sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "What are Random Forests and how do they improve predictions?",
      answer: "An ensemble method that combines multiple decision trees to improve accuracy and reduce overfitting.\n\nExample: Predicting customer churn.\nCode Example:\n```python\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "What is the purpose of Linear Regression?",
      answer: "Used for regression tasks, predicting continuous values by modeling the relationship between features and the target as a straight line.\n\nExample: Predicting house prices.\nCode Example:\n```python\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "What is the goal of Support Vector Machines (SVM) in supervised learning?",
      answer: "Finds the optimal boundary (hyperplane) to separate classes in a high-dimensional space.\n\nExample: Image classification.\nCode Example:\n```python\nfrom sklearn.svm import SVC\nmodel = SVC()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "What is Naive Bayes used for and what assumption does it make?",
      answer: "Used for classification, assumes input features are independent of each other.\n\nExample: Spam detection.\nCode Example:\n```python\nfrom sklearn.naive_bayes import GaussianNB\nmodel = GaussianNB()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "How does K-Nearest Neighbors (KNN) work in supervised learning?",
      answer: "Classifies a data point based on the majority class of its nearest neighbors. Can also be used for regression.\n\nExample: Classifying customer behavior.\nCode Example:\n```python\nfrom sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "What is Polynomial Regression and when is it used?",
      answer: "Used when the relationship between features and target is non-linear, fits a polynomial curve.\n\nExample: Modeling complex growth trends.\nCode Example:\n```python\nfrom sklearn.preprocessing import PolynomialFeatures\npoly = PolynomialFeatures(degree=2)\nX_poly = poly.fit_transform(X)\n```"
    },
    {
      question: "What problem does Ridge Regression address?",
      answer: "Addresses multicollinearity in linear regression by adding a penalty term to shrink coefficients and stabilize the model.\n\nExample: Predicting sales with correlated features.\nCode Example:\n```python\nfrom sklearn.linear_model import Ridge\nmodel = Ridge(alpha=1.0)\nmodel.fit(X_train, y_train)\n```"
    },
    {
      question: "How are Neural Networks used in supervised learning?",
      answer: "Used for both classification and regression tasks, consists of multiple layers of neurons learning complex patterns in data.\n\nExample: Handwriting recognition.\nCode Example:\n```python\nfrom keras.models import Sequential\nfrom keras.layers import Dense\nmodel = Sequential()\nmodel.add(Dense(128, input_dim=10, activation='relu'))\nmodel.compile(loss='binary_crossentropy', optimizer='adam')\n```"
    },
    {
      question: "What is the role of K-Means in supervised learning?",
      answer: "Primarily unsupervised, but can be used in pipelines for initial data clustering to improve classification or regression.\n\nExample: Clustering customer segments.\nCode Example:\n```python\nfrom sklearn.cluster import KMeans\nmodel = KMeans(n_clusters=3)\nmodel.fit(X)\n```"
    },
    {
      question: "What are ensemble methods like Bagging and Boosting used for?",
      answer: "Combines models to improve accuracy. Bagging reduces variance, Boosting reduces bias by focusing on misclassified instances.\n\nExample: Improving accuracy in predictive modeling.\nCode Example:\n```python\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\nmodel.fit(X_train, y_train)\n```"
    },
    {
      "question": "SLDT: Sheep Learn Decision Trees",
      "answer": "S - Supervised Learning: Learning from labeled data\nL - Labels: Known outputs provided for training\nD - Decision Trees: A common model in supervised learning\nT - Training: Learning process of adjusting model parameters\n\n```\nfrom sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier()\n```"
    },
    {
      "question": "LRBM: Lions Roar Before Midnight",
      "answer": "L - Logistic Regression: A supervised learning algorithm for classification\nR - Regression: Predicts probabilities for classes\nB - Binary: Used for binary classification (0 or 1)\nM - Model: Logistic regression model\n\n```\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\n```"
    },
    {
      "question": "NNLS: New Nests Look Shiny",
      "answer": "N - Neural Networks: A popular model for supervised learning\nN - Nodes: Neurons in the network\nL - Layers: Composed of input, hidden, and output layers\nS - Supervised: Learns from labeled data\n\n```\nmodel.add(Dense(64, activation='relu'))\n```"
    },
    {
      "question": "KNNM: Kangaroos Need New Maps",
      "answer": "K - k-NN: A supervised algorithm that classifies based on nearest neighbors\nN - Nearest: Finds the closest points to make predictions\nN - Neighbors: The 'k' nearest neighbors determine the output\nM - Model: The k-NN model for classification tasks\n\n```\nfrom sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=5)\n```"
    },
    {
      "question": "SVMH: Snakes Visit Many Hills",
      "answer": "S - Support Vector Machines: A supervised learning model\nV - Vectors: Key data points used to form decision boundaries\nM - Margin: Distance between boundary and nearest vectors\nH - Hyperplane: Decision boundary that separates classes\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC()\n```"
    },
    {
      "question": "GBTD: Great Bears Try Diving",
      "answer": "G - Gradient Boosting: A supervised algorithm\nB - Boosting: Combines weak learners to create a strong model\nT - Trees: Decision trees used as base learners\nD - Data: Works on labeled training data\n\n```\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\n```"
    },
    {
      "question": "RFED: Rabbits Find Easy Directions",
      "answer": "R - Random Forest: An ensemble of decision trees\nF - Forest: Combination of many decision trees\nE - Ensemble: Aggregates predictions from multiple models\nD - Data: Supervised learning with labeled data\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    },
    {
      "question": "ADTS: All Dogs Try Sprinting",
      "answer": "A - AdaBoost: A boosting algorithm\nD - Decision Trees: Used as weak learners in AdaBoost\nT - Training: Trains sequentially to correct errors\nS - Supervised: Trains on labeled data\n\n```\nfrom sklearn.ensemble import AdaBoostClassifier\nmodel = AdaBoostClassifier()\n```"
    },
    {
      "question": "LRBL: Lions Rest Before Lunch",
      "answer": "L - Linear Regression: A supervised algorithm for regression tasks\nR - Regression: Predicts continuous values\nB - Bias: A constant term added to predictions\nL - Linearity: Assumes a linear relationship between input and output\n\n```\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\n```"
    },
    {
      "question": "NBPL: New Bears Pick Leaves",
      "answer": "N - Naive Bayes: A probabilistic supervised learning model\nB - Bayes' Theorem: Used to calculate conditional probabilities\nP - Prior: Assumes feature independence (Naive assumption)\nL - Labeled Data: Trains on labeled data for classification\n\n```\nfrom sklearn.naive_bayes import GaussianNB\nmodel = GaussianNB()\n```"
    },
    {
      "question": "MLTS: Monkeys Love To Sing",
      "answer": "M - Multi-layer Perceptron: A type of neural network for supervised learning\nL - Layers: Input, hidden, and output layers\nT - Training: Supervised learning process\nS - Supervised: Learns from labeled datasets\n\n```\nfrom sklearn.neural_network import MLPClassifier\nmodel = MLPClassifier()\n```"
    },
    {
      "question": "DTMS: Dogs Teach Many Students",
      "answer": "D - Decision Trees: Commonly used in supervised learning\nT - Training: Adjusts tree based on labeled data\nM - Model: The decision tree model\nS - Splits: Splits data into nodes based on features\n\n```\nfrom sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier()\n```"
    },
    {
      "question": "SVCM: Snakes Visit Cold Mountains",
      "answer": "S - Support Vector Classifier: A supervised learning model for classification\nV - Vectors: Data points used to define the decision boundary\nC - Classification: Used for categorizing data into classes\nM - Margin: The distance between decision boundary and closest data points\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC()\n```"
    },
    {
      "question": "RFEN: Rabbits Find Easy Nuts",
      "answer": "R - Random Forest: An ensemble learning method\nF - Features: Input variables for the trees\nE - Ensemble: Combines multiple decision trees for better predictions\nN - Nodes: Decision points in each tree\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    },
    {
      "question": "GBMD: Great Bears Make Decisions",
      "answer": "G - Gradient Boosting: Sequential training on labeled data\nB - Boosting: Improves model performance by focusing on errors\nM - Model: The combined model from weak learners\nD - Decision Trees: Commonly used base learners\n\n```\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\n```"
    },
    {
      "question": "KNNT: Kangaroos Need New Trails",
      "answer": "K - k-Nearest Neighbors: Supervised learning algorithm\nN - Neighbors: Data points that are closest to the input point\nN - Non-parametric: Does not make assumptions about data distribution\nT - Training: Learns from labeled training data\n\n```\nfrom sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=3)\n```"
    },
    {
      "question": "SVCB: Snakes Visit Cold Beaches",
      "answer": "S - Support Vector Classifier: A classification model\nV - Vectors: Support vectors determine the decision boundary\nC - Classify: Assigns data points to predefined categories\nB - Boundary: Decision boundary separates the data\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC()\n```"
    },
    {
      "question": "GNBP: Goats Nap By Ponds",
      "answer": "G - Gaussian Naive Bayes: A probabilistic classifier\nN - Naive: Assumes independence between features\nB - Bayes: Uses Bayes' Theorem for probability calculation\nP - Probabilistic: Outputs probabilities for each class\n\n```\nfrom sklearn.naive_bayes import GaussianNB\nmodel = GaussianNB()\n```"
    },
    {
      "question": "LREG: Lions Run Every Game",
      "answer": "L - Logistic Regression: For classification tasks\nR - Regression: Predicts probabilities for classes\nE - Equation: Uses the sigmoid function for predictions\nG - Gradient Descent: Optimizes parameters\n\n```\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\n```"
    },
    {
      "question": "DTND: Dogs Take New Directions",
      "answer": "D - Decision Trees: A tree structure to classify data\nT - Training: Supervised learning process\nN - Nodes: Represent decisions made based on features\nD - Data: Labeled data used for training\n\n```\nfrom sklearn.tree import DecisionTreeClassifier\nmodel = DecisionTreeClassifier()\n```"
    },
    {
      "question": "RFND: Rabbits Find New Directions",
      "answer": "R - Random Forest: An ensemble of decision trees\nF - Features: Randomly selected features for splitting\nN - Nodes: Decision points within the tree\nD - Data: Uses labeled data for training\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    },
    {
      "question": "GBBT: Great Bears Build Tunnels",
      "answer": "G - Gradient Boosting: Sequentially trains models to reduce errors\nB - Boosting: Combines weak learners into a strong model\nB - Binary Classification: Can be used for binary outcomes\nT - Training: Uses labeled data for training\n\n```\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\n```"
    },
    {
      "question": "SVMN: Snakes Visit New Neighborhoods",
      "answer": "S - Support Vector Machine: A classifier that defines a hyperplane\nV - Vectors: Support vectors influence the decision boundary\nM - Margin: The space between the boundary and the nearest points\nN - Non-linear: Can classify data that is not linearly separable\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC()\n```"
    },
    {
      "question": "ADAO: All Ducks Always Observe",
      "answer": "A - AdaBoost: An ensemble learning method\nD - Decision Trees: Base learners in AdaBoost\nA - Adaptive: Corrects errors by adjusting weights\nO - Outputs: Provides better predictions through boosting\n\n```\nfrom sklearn.ensemble import AdaBoostClassifier\nmodel = AdaBoostClassifier()\n```"
    },
    {
      "question": "NNLS: New Neurons Learn Slowly",
      "answer": "N - Neural Networks: A supervised learning model\nN - Neurons: Units in a neural network\nL - Layers: Organized in input, hidden, and output layers\nS - Supervised: Learns from labeled data\n\n```\nfrom sklearn.neural_network import MLPClassifier\nmodel = MLPClassifier()\n```"
    },
    {
      "question": "SVMK: Snakes Visit Many Kingdoms",
      "answer": "S - Support Vector Machine: Classifies data by finding the optimal boundary\nV - Vectors: Key points that influence the decision boundary\nM - Margin: The distance between the hyperplane and closest data points\nK - Kernel: Transforms input data into higher dimensions\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC(kernel='rbf')\n```"
    },
    {
      "question": "RFCL: Red Foxes Climb Logs",
      "answer": "R - Random Forest: A supervised learning algorithm\nF - Forest: A collection of decision trees\nC - Classification: Can be used for classification tasks\nL - Learning: Learns from labeled training data\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    },
    {
      "question": "GBLN: Great Bears Learn Nicely",
      "answer": "G - Gradient Boosting: A boosting method for supervised learning\nB - Boosting: Improves weak models sequentially\nL - Labeled Data: Uses labeled data to learn\nN - Nodes: Decision nodes in the tree-based learners\n\n```\nfrom sklearn.ensemble import GradientBoostingClassifier\nmodel = GradientBoostingClassifier()\n```"
    },
    {
      "question": "SVCM: Snakes Visit Cold Mountains",
      "answer": "S - Support Vector Classifier: A model for classification\nV - Vectors: Define the decision boundary\nC - Classification: Categorizes data into classes\nM - Margin: Space between the boundary and nearest points\n\n```\nfrom sklearn.svm import SVC\nmodel = SVC()\n```"
    },
    {
      "question": "KNNS: Kangaroos Need New Space",
      "answer": "K - k-Nearest Neighbors: A supervised learning algorithm\nN - Neighbors: Closest data points used for classification\nN - Non-parametric: Makes no assumptions about data\nS - Supervised: Learns from labeled training data\n\n```\nfrom sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier()\n```"
    },
    {
      "question": "RFMT: Rabbits Find Many Trails",
      "answer": "R - Random Forest: Uses multiple decision trees\nF - Forest: Combines trees for better accuracy\nM - Model: Ensemble of decision trees\nT - Training: Uses labeled data for training\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    },
    {
      "question": "ADBT: All Ducks Build Towers",
      "answer": "A - AdaBoost: A boosting algorithm for classification\nD - Decision Trees: Used as weak learners in boosting\nB - Boosting: Improves performance by focusing on errors\nT - Training: Trains sequentially on labeled data\n\n```\nfrom sklearn.ensemble import AdaBoostClassifier\nmodel = AdaBoostClassifier()\n```"
    },
    {
      "question": "LRGM: Lions Run Great Miles",
      "answer": "L - Logistic Regression: Used for binary classification\nR - Regression: Predicts probabilities\nG - Gradient Descent: Optimizes the model\nM - Model: Learns from labeled data\n\n```\nfrom sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\n```"
    },
    {
      "question": "SVNB: Snakes Visit New Burrows",
      "answer": "S - Support Vector Machines: A classification model\nV - Vectors: Define the decision boundary\nN - Non-linear: Can separate non-linear data\nB - Boundary: Separates classes based on input features\n\n```\nfrom sklearn.svm import SVC(kernel='rbf')\n```"
    },
    {
      "question": "RFLS: Red Foxes Love Snow",
      "answer": "R - Random Forest: An ensemble learning method\nF - Features: Used to split nodes in decision trees\nL - Labels: Supervised learning with labeled data\nS - Split: Splits data at each node\n\n```\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier()\n```"
    }
  ],

  oop: [
    {
      "question": "Cats Create Objects Beautifully",
      "answer": "C - Classes: Blueprints for creating objects\nC - Create: Classes are used to instantiate objects\nO - Objects: Instances of a class\nB - Beautifully: Represents the elegant design of classes\n\n```\nclass Cat:\n    def __init__(self, name):\n        self.name = name\n    \n    def meow(self):\n        return f\"{self.name} says meow!\"\n\nfluffy = Cat(\"Fluffy\")\nprint(fluffy.meow())\n# Output: Fluffy says meow!\n```"
    },
    {
      "question": "Ice Cream Cools Swiftly",
      "answer": "I - Instance: Variables specific to each object\nC - Class: Variables shared among all instances\nC - Cool: Represents variables storing data\nS - Swiftly: How variables can change quickly\n\n```\nclass IceCream:\n    flavor = \"Vanilla\"  # Class variable\n    \n    def __init__(self, topping):\n        self.topping = topping  # Instance variable\n\nic1 = IceCream(\"Sprinkles\")\nic2 = IceCream(\"Chocolate chips\")\nprint(f\"{ic1.flavor} with {ic1.topping}\")\nprint(f\"{ic2.flavor} with {ic2.topping}\")\n# Output:\n# Vanilla with Sprinkles\n# Vanilla with Chocolate chips\n```"
    },
    {
      "question": "Monkeys Make Oranges Bounce",
      "answer": "M - Methods: Functions defined in a class\nM - Make: Methods perform actions\nO - Objects: Instances that methods operate on\nB - Bounce: Represents the behavior of objects\n\n```\nclass Monkey:\n    def __init__(self, name):\n        self.name = name\n    \n    def throw_orange(self):\n        return f\"{self.name} throws an orange!\"\n\ngeorge = Monkey(\"George\")\nprint(george.throw_orange())\n# Output: George throws an orange!\n```"
    },
    {
      "question": "Snakes Slither Through Individually",
      "answer": "S - Self: Refers to the instance of the class\nS - Slither: Moving through the class\nT - Through: Accessing class components\nI - Individually: Each instance is unique\n\n```\nclass Snake:\n    def __init__(self, name):\n        self.name = name\n    \n    def hiss(self):\n        return f\"{self.name} says ssssss!\"\n\npython = Snake(\"Python\")\nprint(python.hiss())\n# Output: Python says ssssss!\n```"
    },
    {
      "question": "Cows Create New Ideas",
      "answer": "C - Constructors: Special methods for object creation\nC - Create: Initializing new objects\nN - New: Fresh instances of a class\nI - Ideas: Represents new instances with unique attributes\n\n```\nclass Cow:\n    def __init__(self, name, sound=\"moo\"):\n        self.name = name\n        self.sound = sound\n    \n    def make_sound(self):\n        return f\"{self.name} says {self.sound}!\"\n\nbessie = Cow(\"Bessie\")\nprint(bessie.make_sound())\n# Output: Bessie says moo!\n```"
    },
    {
      "question": "Irresistible Elephants Borrow Carefully",
      "answer": "I - Inheritance: Deriving attributes and methods from another class\nE - Elephants: Represents parent classes\nB - Borrow: Inheriting traits from parent class\nC - Carefully: Thoughtful use of inherited features\n\n```\nclass Animal:\n    def speak(self):\n        return \"Some sound\"\n\nclass Elephant(Animal):\n    def trumpet(self):\n        return \"Trumpet!\"\n\ndumbo = Elephant()\nprint(dumbo.speak())  # Inherited method\nprint(dumbo.trumpet())  # Own method\n# Output:\n# Some sound\n# Trumpet!\n```"
    },
    {
      "question": "Parrots Perform Many Operations",
      "answer": "P - Polymorphism: Same interface for different underlying forms\nP - Perform: Executing methods\nM - Many: Multiple classes can implement the same method\nO - Operations: Actions that objects can perform\n\n```\nclass Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\nclass Parrot(Animal):\n    def speak(self):\n        return \"Squawk!\"\n\nanimals = [Dog(), Parrot()]\nfor animal in animals:\n    print(animal.speak())\n# Output:\n# Woof!\n# Squawk!\n```"
    },
    {
      "question": "Eggs Protect Insides Vigilantly",
      "answer": "E - Encapsulation: Bundling of data with methods that operate on that data\nP - Protect: Guarding internal details of a class\nI - Insides: Internal attributes and methods\nV - Vigilantly: Carefully controlling access to class internals\n\n```\nclass Egg:\n    def __init__(self, color):\n        self.__color = color  # Private attribute\n    \n    def get_color(self):\n        return self.__color\n\neaster_egg = Egg(\"Blue\")\nprint(easter_egg.get_color())\n# Output: Blue\n```"
    },
    {
      "question": "Ants Demonstrate Complex Interactions",
      "answer": "A - Abstraction: Hiding complex implementation details\nD - Demonstrate: Showing a simplified interface\nC - Complex: Handling intricate systems\nI - Interactions: How objects communicate and operate\n\n```\nfrom abc import ABC, abstractmethod\n\nclass Insect(ABC):\n    @abstractmethod\n    def communicate(self):\n        pass\n\nclass Ant(Insect):\n    def communicate(self):\n        return \"Release pheromones\"\n\nworker = Ant()\nprint(worker.communicate())\n# Output: Release pheromones\n```"
    },
    {
      "question": "Squirrels Store Many Objects",
      "answer": "S - Special: Special methods in Python classes\nS - Store: Holding information about the object\nM - Many: Multiple special methods available\nO - Objects: Instances of a class\n\n```\nclass Squirrel:\n    def __init__(self, name, nuts):\n        self.name = name\n        self.nuts = nuts\n    \n    def __str__(self):\n        return f\"{self.name} has {self.nuts} nuts\"\n\nsquirrel = Squirrel(\"Nutkin\", 5)\nprint(squirrel)\n# Output: Nutkin has 5 nuts\n```"
    }
  ],
  sortingAlgorithms: [
    {
      "question": "Bubble Sort: Never Cry, Stay Ready",
      "answer": "N - Navigate array length\nC - Check adjacent elements\nS - Swap if needed\nR - Return sorted array\n\nPseudo-code:\n```\nfunction bubble_sort(arr)\n    𝑛 ← len(arr)                         # N: Navigate array length\n    for 𝑖 ∈ range(𝑛) do                  # N: Navigate through each element\n        for 𝑗 ∈ range(0, 𝑛 − 𝑖 − 1) do    # C: Check adjacent elements\n            if arr𝑗 > arr𝑗+1 then\n                swap(arr𝑗, arr𝑗+1)       # S: Swap if needed\n            end if\n        end for\n    end for\n    return arr                           # R: Return sorted array\nend function\n```\n\nPython Code:\n```\ndef bubble_sort(arr):\n    n = len(arr)  # N: Navigate array length\n    for i in range(n):  # N: Navigate through each element\n        for j in range(0, n - i - 1):  # C: Check adjacent elements\n            if arr[j] > arr[j + 1]:  # C: If greater, swap\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # S: Swap if needed\n    return arr  # R: Return sorted array\n\n# Example\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))  \n# Output: [11, 12, 22, 25, 34, 64, 90]\n```\n\nOptimization:\n- Improvement: Stop the loop early if no elements were swapped, indicating the array is already sorted.\n- Best Case Complexity: O(n) when the array is already sorted.\n- Worst Case Complexity: O(n²) when the array is reversed.\n\nUse Case:\nBubble sort is useful for small datasets or educational purposes but is inefficient for large data."
    },
    {
      "question": "Selection Sort: Identify Small Cats Swiftly Running",
      "answer": "I - Identify minimum element\nS - Set minimum index\nC - Compare each element\nS - Swap minimum to the start\nR - Return sorted array\n\nPseudo-code:\n```\nfunction selection_sort(arr)\n    for 𝑖 ∈ range(len(arr)) do        # I: Identify the current element\n        min_idx ← 𝑖                   # S: Set the current index as minimum\n        for 𝑗 ∈ range(𝑖 + 1, len(arr)) do # C: Compare with other elements\n            if arr𝑗 < arrmin_idx          # C: If smaller, update min_idx\n                min_idx ← 𝑗\n            end if\n        end for\n        swap(arr𝑖, arrmin_idx)           # S: Swap the smallest element\n    end for\n    return arr                         # R: Return sorted array\nend function\n```\n\nPython Code:\n```\ndef selection_sort(arr):\n    for i in range(len(arr)):  # I: Identify the current element\n        min_idx = i  # S: Set the current index as minimum\n        for j in range(i + 1, len(arr)):  # C: Compare with other elements\n            if arr[j] < arr[min_idx]:  # C: Update min_idx if smaller found\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]  # S: Swap the smallest element\n    return arr  # R: Return sorted array\n\n# Example\nprint(selection_sort([64, 25, 12, 22, 11]))\n# Output: [11, 12, 22, 25, 64]\n```\n\nOptimization:\nSelection sort does n swaps regardless of input, meaning it does not improve with partially sorted arrays.\nTime Complexity: O(n²).\n\nUse Case:\nSelection sort is efficient in terms of the number of swaps, making it suitable when the cost of swapping is high."
    },
    {
      "question": "Insertion Sort: Careful Soldiers In Ready Formation",
      "answer": "C - Choose next element\nS - Slide larger elements\nI - Insert element in correct position\nR - Return sorted array\n\nPseudo-code:\n```\nfunction insertion_sort(arr)\n    for 𝑖 ∈ range(1, len(arr)) do     # C: Choose the next element\n        key ← arr𝑖                    # C: Store the current element as key\n        𝑗 ← 𝑖 − 1\n        while 𝑗 ≥ 0 ∧ key < arr𝑗 do   # S: Slide larger elements\n            arr𝑗+1 ← arr𝑗\n            𝑗 ← 𝑗 − 1\n        end while\n        arr𝑗+1 ← key                  # I: Insert the key into correct position\n    end for\n    return arr                         # R: Return sorted array\nend function\n```\n\nPython Code:\n```\ndef insertion_sort(arr):\n    for i in range(1, len(arr)):  # C: Choose the next element\n        key = arr[i]  # C: Store the current element as key\n        j = i - 1\n        while j >= 0 and key < arr[j]:  # S: Slide larger elements\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key  # I: Insert the key into the correct position\n    return arr  # R: Return sorted array\n\n# Example\nprint(insertion_sort([12, 11, 13, 5, 6]))\n# Output: [5, 6, 11, 12, 13]\n```\n\nOptimization:\n- Best Case Complexity: O(n) when the array is already sorted.\n- Worst Case Complexity: O(n²) when the array is reversed.\n\nUse Case:\nEfficient for small data sets or nearly sorted data. Insertion sort is often used in hybrid sorting algorithms like Timsort."
    },
    {
      "question": "Merge Sort: Divide, Conquer, Combine Swiftly",
      "answer": "D - Divide the array\nC - Conquer by recursively sorting subarrays\nC - Combine sorted subarrays\nS - Sort the whole array\n\nPseudo-code:\n```\nfunction merge_sort(arr)\n    if len(arr) > 1 then\n        mid ← ⌊len(arr) / 2⌋           # D: Divide the array into halves\n        𝐿 ← [arr𝑖 for 𝑖 ∈ range(mid)]  # D: Left half\n        𝑅 ← [arr𝑖 for 𝑖 ∈ range(mid, len(arr))] # D: Right half\n        merge_sort(𝐿)                   # C: Recursively sort left half\n        merge_sort(𝑅)                   # C: Recursively sort right half\n        merge(𝐿, 𝑅, arr)                # C: Combine the sorted halves\n    end if\n    return arr                          # S: Return sorted array\nend function\n```\n\nPython Code:\n```\ndef merge_sort(arr):\n    if len(arr) > 1:\n        mid = len(arr) // 2  # D: Divide the array into halves\n        L = arr[:mid]  # Left half\n        R = arr[mid:]  # Right half\n\n        merge_sort(L)  # C: Recursively sort left half\n        merge_sort(R)  # C: Recursively sort right half\n\n        i = j = k = 0\n        while i < len(L) and j < len(R):  # C: Combine sorted halves\n            if L[i] < R[j]:\n                arr[k] = L[i]\n                i += 1\n            else:\n                arr[k] = R[j]\n                j += 1\n            k += 1\n        while i < len(L):  # Copy remaining elements from L\n            arr[k] = L[i]\n            i += 1\n            k += 1\n        while j < len(R):  # Copy remaining elements from R\n            arr[k] = R[j]\n            j += 1\n            k += 1\n\n    return arr  # S: Return sorted array\n\n# Example\nprint(merge_sort([38, 27, 43, 3, 9, 82, 10]))\n# Output: [3, 9, 10, 27, 38, 43, 82]\n```\n\nOptimization:\nMerge sort is naturally recursive and performs well with large datasets. It has a guaranteed O(n log n) complexity, but it requires extra space to store temporary arrays.\n\nUse Case:\nSuitable for large datasets and linked lists where random access is expensive."
    },
    {
      "question": "Heap Sort: Heapify Maintains Sorted Layers",
      "answer": "H - Heapify the array\nM - Maximum element is swapped to the end\nS - Sort by extracting the heap\nL - Level order maintained\n\nPseudo-code (with Heapify function):\n```\nfunction heapify(arr, n, i)\n    largest ← 𝑖\n    left ← 2𝑖 + 1\n    right ← 2𝑖 + 2\n    if left < 𝑛 ∧ arrleft > arrlargest then\n        largest ← left\n    end if\n    if right < 𝑛 ∧ arrright > arrlargest then\n        largest ← right\n    end if\n    if largest ≠ 𝑖 then\n        swap(arr𝑖, arrlargest)\n        heapify(arr, 𝑛, largest)\n    end if\nend function\n\nfunction heap_sort(arr)\n    n ← len(arr)\n    for 𝑖 ∈ range(⌊𝑛/2⌋ − 1, −1, −1) do   # H: Heapify the array\n        heapify(arr, 𝑛, 𝑖)\n    end for\n    for 𝑖 ∈ range(𝑛 − 1, 0, −1) do       # M: Maximum element to the end\n        swap(arr0, arr𝑖)\n        heapify(arr, 𝑖, 0)               # S: Sort by extracting the heap\n    end for\n    return arr                            # L: Return sorted array\nend function\n```\n\nPython Code:\n```\ndef heapify(arr, n, i):\n    largest = i  # H: Heapify step\n    left = 2 * i + 1\n    right = 2 * i + 2\n\n    if left < n and arr[i] < arr[left]:\n        largest = left\n\n    if right < n and arr[largest] < arr[right]:\n        largest = right\n\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heap_sort(arr):\n    n = len(arr)\n    for i in range(n // 2 - 1, -1, -1):  # H: Build a max heap\n        heapify(arr, n, i)\n\n    for i in range(n - 1, 0, -1):  # M: Move maximum to the end\n        arr[i], arr[0] = arr[0], arr[i]  # S: Swap max to sorted part\n        heapify(arr, i, 0)  # L: Restore heap property\n\n    return arr\n\n# Example\nprint(heap_sort([12, 11, 13, 5, 6, 7]))\n# Output: [5, 6, 7, 11, 12, 13]\n```\n\nOptimization:\nBest and Worst Case: O(n log n) since heap sort builds a heap in linear time and extracts elements one by one.\n\nUse Case:\nUseful when memory usage is a concern, as it sorts in-place without extra memory."
    }
  ],
  mathMLConceptsMnemonics: [
    {
      "question": "Eigenvalues Validate Special Vectors",
      "answer": "Eigenvalues and Eigenvectors:\nE - Eigenvalues: Scalar λ satisfying Av = λv\nV - Vectors: Corresponding eigenvectors v\nS - Special: Characterize linear transformations\nV - Vector spaces: Fundamental in linear algebra\n\nExplanation: Eigenvalues and eigenvectors are crucial in linear transformations. For a square matrix A, if Av = λv, then λ is an eigenvalue and v is the corresponding eigenvector. They are used in matrix diagonalization, principal component analysis, and solving differential equations.\n\n```\n# Eigenvalue and Eigenvector calculation\neig_vals, eig_vecs = np.linalg.eig(A)\n# eig_vals: [5.372, -0.372], eig_vecs: [[0.707, -0.707], [0.707, 0.707]]\n```"
    },
    {
      "question": "Systems Eliminate Variables Orderly",
      "answer": "Solving Systems of Equations:\nS - Systems: Set of linear equations\nE - Eliminate: Gaussian elimination process\nV - Variables: Unknowns to be solved\nO - Orderly: Systematic approach to solution\n\nExplanation: Solving systems of linear equations involves methods like Gaussian elimination to transform the augmented matrix into row echelon form. The process systematically eliminates variables to achieve a triangular matrix, enabling back-substitution for the solution.\n\n```\n# Solve systems with np.linalg.solve\nsolution = np.linalg.solve(A, b) # Solves system of linear equations\n```"
    },
    {
      "question": "Gradients Direct Optimization Swiftly",
      "answer": "Calculus for Machine Learning:\nG - Gradients: Vector of partial derivatives\nD - Direct: Point in steepest ascent direction\nO - Optimization: Minimize or maximize functions\nS - Swiftly: Efficient method for finding optima\n\nExplanation: Gradients are fundamental in optimization algorithms like gradient descent. The gradient ∇f of a function f is a vector field of partial derivatives, indicating the direction of steepest ascent. In machine learning, we often use the negative gradient to minimize loss functions.\n\n```\n# Gradient Descent (simplified)\ndef gradient_descent(theta, gradient, alpha=0.01):\n    return theta - alpha * gradient # Update rule\n```"
    },
    {
      "question": "Distributions Describe Data Decisively",
      "answer": "Statistics for Machine Learning:\nD - Distributions: Probability models of data\nD - Describe: Characterize data patterns\nD - Data: Observed or sampled information\nD - Decisively: Enable statistical inference\n\nExplanation: Probability distributions model the likelihood of data in statistical analyses. They form the basis for hypothesis testing, parameter estimation, and Bayesian inference. Common distributions include Normal, Binomial, and Poisson, each with specific properties and applications in data science.\n\n```\n# Normal distribution\nmean, std = 0, 1\nsamples = np.random.normal(mean, std, 1000)\n\n# P-value and hypothesis testing (with scipy)\nfrom scipy.stats import ttest_1samp\nttest_1samp(samples, popmean=mean) # T-test output\n```"
    },
    {
      "question": "Python Empowers Data Science",
      "answer": "Programming in Python:\nP - Python: High-level, interpreted language\nE - Empowers: Enables efficient coding\nD - Data: Handles various data structures\nS - Science: Facilitates scientific computing\n\nExplanation: Python is a versatile language widely used in data science and machine learning. Its extensive libraries (NumPy, Pandas, Scikit-learn) provide powerful tools for data manipulation, analysis, and model development. Python's simplicity and flexibility make it ideal for rapid prototyping and large-scale deployments.\n\n```\nimport pandas as pd\n# Using Pandas for data manipulation\ndata = {'Col1': [1, 2], 'Col2': [3, 4]}\ndf = pd.DataFrame(data)\n```"
    },
    {
      "question": "Visualize, Analyze, Debug Efficiently",
      "answer": "Practical Tips:\nV - Visualize: Use plots to understand data\nA - Analyze: Examine code and data critically\nD - Debug: Identify and fix code issues\nE - Efficiently: Optimize workflow and performance\n\nExplanation: Effective data science involves visualization for insight, critical analysis of code and results, and efficient debugging. Tools like Matplotlib for visualization, profiling for performance analysis, and integrated development environments (IDEs) for debugging are essential in the data scientist's toolkit.\n\n```\nimport matplotlib.pyplot as plt\n# Plotting a simple graph\nx = np.linspace(0, 10, 100)\ny = np.sin(x)\nplt.plot(x, y)\nplt.show()\n```"
    },
    {
      "question": "Solve Lines Efficiently",
      "answer": "Systems of Linear Equations:\nS - Solve: Find variable values that satisfy all equations\nL - Lines: Represent equations as lines in 2D or planes in higher dimensions\nE - Efficiently: Use matrices for efficient solutions\n\nExplanation: Systems of linear equations involve multiple equations with shared variables. Representing these systems using matrices makes solving them easier, especially with tools like numpy.linalg.solve.\n\n```\nimport numpy as np\nA = np.array([[2, 1], [1, 3]])\nb = np.array([5, 8])\nsolution = np.linalg.solve(A, b)\nprint(solution) # Output: [2. 1.]\n```"
    },
    {
      "question": "Determinants Dictate Solutions",
      "answer": "Singular vs. Non-Singular Systems:\nD - Determinants: Check the determinant of the coefficient matrix\nD - Dictate: If the determinant is zero, the system has no unique solution\nS - Solutions: A non-zero determinant guarantees a unique solution\n\nExplanation: A singular matrix has a determinant of zero, meaning no unique solution exists, while a non-singular matrix has a non-zero determinant, ensuring a unique solution.\n\n```\nA = np.array([[1, 2], [2, 4]]) # Singular matrix\ndet_A = np.linalg.det(A)\nprint(det_A) # Output: 0.0 (no unique solution)\n```"
    },
    {
      "question": "Linear Models Predict Reliably",
      "answer": "Linear Regression in Machine Learning:\nL - Linear: The relationship between input features and the output is modeled linearly\nM - Models: Fit a model to find the best-fit line or hyperplane\nP - Predict: Use the model to predict unseen outputs\nR - Reliably: Ensure reliability by minimizing prediction error\n\nExplanation: In machine learning, linear regression assumes a linear relationship between inputs (features) and output. The goal is to find weights and bias that minimize the prediction error.\n\n```\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1, 1], [2, 2], [3, 3]])\ny = np.array([2, 4, 6])\nmodel = LinearRegression().fit(X, y)\nprediction = model.predict(np.array([[4, 4]]))\nprint(prediction) # Output: [8.]\n```"
    },
    {
      "question": "Linearly Relate Features",
      "answer": "Linear Regression and System of Linear Equations:\nL - Linearly: Models a linear relationship between input features and target\nR - Relate: Find relationships between input features (x) and output (y)\nF - Features: Independent variables (wind speed, temperature, etc.) contribute to the outcome\n\nExplanation: Linear regression models a linear relationship between input features and the target. Each feature contributes to the prediction through its corresponding weight.\n\n```\nfrom sklearn.linear_model import LinearRegression\nX = [[5], [10], [15]]  # Wind speed\ny = [1500, 3000, 4500]  # Power output\nmodel = LinearRegression().fit(X, y)\nprediction = model.predict([[20]])\nprint(prediction)  # Output: [6000.]\n```"
    },
    {
      "question": "Vectors Simplify Models",
      "answer": "Vector and Matrix Representation:\nV - Vectors: Represent features as vectors to simplify equations\nS - Simplify: Represent relationships in matrix form for easier computation\nM - Models: Represent the entire dataset as a matrix for model training\n\nExplanation: Using vectors and matrices helps simplify complex datasets and relationships. In linear regression, features and weights are represented as matrices and vectors.\n\n```\nimport numpy as np\nX = np.array([[1, 2], [3, 4], [5, 6]])  # Feature matrix\nw = np.array([0.5, 1])  # Weight vector\ny = np.dot(X, w)\nprint(y)  # Output: [ 2.5 5.5 8.5]\n```"
    },
    {
      "question": "Estimate Parameters Mathematically",
      "answer": "Solving the System Empirically:\nE - Estimate: Use techniques to estimate unknown weights\nP - Parameters: Find the weights (w) and bias (b) that minimize error\nM - Mathematically: Apply methods like gradient descent or normal equation\n\nExplanation: The normal equation or gradient descent helps find the weights that minimize the error between predicted and actual outputs.\n\n```\nX = np.array([[1, 1], [1, 2], [1, 3]])\ny = np.array([1, 2, 3])\nw = np.linalg.inv(X.T @ X) @ X.T @ y\nprint(w)  # Output: [0. 1.] (weights for the best fit)\n```"
    },
    {
      "question": "Determinants Confirm Solutions",
      "answer": "Singularity and Non-Singularity:\nD - Determinants: Use the determinant to check if the system has a unique solution\nC - Confirm: A non-zero determinant confirms the system is non-singular\nS - Solutions: Non-singular systems guarantee a unique solution\n\nExplanation: When the determinant is zero, the system is singular (no unique solution). A non-zero determinant means the system has a unique solution.\n\n```\nA = np.array([[2, 1], [1, 3]])\ndet_A = np.linalg.det(A)\nprint(det_A)  # Output: 5.0 (non-singular, unique solution)\n```"
    },
    {
      "question": "Solve Efficiently Using Matrices",
      "answer": "Matrix Operations in Linear Regression:\nS - Solve: Use matrix operations to solve systems efficiently\nE - Efficiently: Matrix representations allow for efficient computation\nM - Matrices: Use matrices for solving complex systems like linear regression\n\nExplanation: Solving linear regression systems using matrix operations (like the normal equation) is efficient and scales well to larger datasets.\n\n```\nX = np.array([[1, 2], [3, 4], [5, 6]])\nw = np.linalg.inv(X.T @ X) @ X.T @ y\nprint(w)  # Output: weights solving the system using matrix inversion\n```"
    },
    {
      "question": "Sentences Solve Everything",
      "answer": "Systems of Sentences and Linear Equations:\nS - Sentences: Sentences are like equations, each providing information about the world or variables\nS - Solve: Combining equations (or sentences) gives us solutions\nE - Everything: The system (or group of sentences) aims to solve everything by finding consistent relationships\n\nExplanation: Systems of sentences and linear equations both provide information. In linear algebra, systems of equations are solved by finding the values that satisfy all equations simultaneously.\n\n```\nimport numpy as np\n\n# System of equations: 2x + y = 5, 3x + 4y = 6\nA = np.array([[2, 1], [3, 4]])\nb = np.array([5, 6])\n\n# Solve using NumPy\nsolution = np.linalg.solve(A, b)\nprint(solution)  # Output: [1. 3.]\n```"
    },
    {
      "question": "Complete, Redundant, Contradictory",
      "answer": "Types of Systems:\nC - Complete: The system provides enough information to find a unique solution\nR - Redundant: Repeating information leads to fewer unique solutions\nC - Contradictory: Conflicting information leads to no solution\n\nExplanation: In systems of equations (or sentences), a complete system gives unique solutions, a redundant system reduces rank, and a contradictory system has no solution.\n\n```\n# Complete System Example\nA = np.array([[2, 1], [1, -1]])\nb = np.array([5, 1])\nsolution = np.linalg.solve(A, b)\nprint(solution)  # Output: [2. 1.] (Unique solution)\n\n# Redundant System Example\nA = np.array([[1, 1], [1, 1]])\nb = np.array([2, 2])\ndet_A = np.linalg.det(A)\nprint(det_A)  # Output: 0.0 (No unique solution)\n\n# Contradictory System Example\nA = np.array([[1, 1], [1, 1]])\nb = np.array([2, 3])\ndet_A = np.linalg.det(A)\nprint(det_A)  # Output: 0.0 (Contradiction, no solution)\n```"
    },
    {
      "question": "Singular Systems Stall",
      "answer": "Singular vs. Non-Singular Systems:\nS - Singular: Singular systems stall since they have no unique solution\nS - Non-Singular: Non-singular systems solve quickly with unique solutions\n\nExplanation: In linear algebra, non-singular systems have full rank and provide unique solutions, while singular systems do not.\n\n```\n# Non-Singular System Example\nA = np.array([[1, 2], [3, 4]])\nb = np.array([5, 6])\nsolution = np.linalg.solve(A, b)\nprint(solution)  # Output: [solution for the non-singular system]\n\n# Singular System Example\nA = np.array([[1, 1], [2, 2]])\nb = np.array([3, 6])\ntry:\n    solution = np.linalg.solve(A, b)\nexcept np.linalg.LinAlgError as e:\n    print(e)  # Output: Singular matrix\n```"
    },
    {
      "question": "Rank Resolves Equations",
      "answer": "Rank of a System:\nR - Rank: Rank tells how many independent rows or pieces of information a system has\nR - Resolves: Full rank systems resolve equations completely with unique solutions\nE - Equations: The number of independent equations (or rows) is the rank of the matrix\n\nExplanation: The rank of a matrix determines whether a system has a unique solution (full rank) or is indeterminate (reduced rank).\n\n```\n# Rank example\nA = np.array([[1, 2], [2, 4]])\nrank_A = np.linalg.matrix_rank(A)\nprint(rank_A)  # Output: 1 (Reduced rank, no unique solution)\n```"
    },
    {
      "question": "Problem Solvers Work Together",
      "answer": "Complex Systems of Sentences:\nP - Problem: Complex problems require combining information from multiple sources\nS - Solvers: Each sentence or equation works to solve part of the puzzle\nW - Work: By working together, a solution can emerge\nT - Together: When combined, all information leads to an overall solution\n\nExplanation: In complex systems, individual sentences or equations provide pieces of information that, when combined, solve the problem.\n\n```\n# Complex System Example\n# \"The dog is black\", \"The cat is orange\", \"The bird is red\"\nsentences = {\n    \"dog\": \"black\",\n    \"cat\": \"orange\",\n    \"bird\": \"red\"\n}\nprint(f\"The bird's color is {sentences['bird']}\")  # Output: red\n```"
    }

  ],

  "pythonBuiltinFunctions": [
    {
      "question": "Abe's Ants Always Ask Anything",
      "answer": "abs(): Returns the absolute value of a number\naiter(): Returns an asynchronous iterator\nall(): Returns True if all elements in an iterable are true\nanext(): Retrieves the next item from an asynchronous iterator\nany(): Returns True if any element in an iterable is true\n\n```\nprint(abs(-5))  # Output: 5\n\nasync def async_gen():\n    yield 1\n    yield 2\n\nasync def main():\n    ait = aiter(async_gen())\n    print(await anext(ait))  # Output: 1\n\nimport asyncio\nasyncio.run(main())\n\nprint(all([True, True, False]))  # Output: False\nprint(any([False, True, False]))  # Output: True\n```"
    },
    {
      "question": "Astronauts Bake Bright Blue Biscuits",
      "answer": "ascii(): Returns a string with non-ASCII characters escaped\nbin(): Converts an integer to a binary string\nbool(): Converts a value to Boolean\nbreakpoint(): Enters the debugger at the call site\nbytearray(): Returns a mutable sequence of bytes\n\n```\nprint(ascii('Python©'))  # Output: 'Python\\xa9'\nprint(bin(10))  # Output: '0b1010'\nprint(bool(0))  # Output: False\n# breakpoint()  # Enters debugger when uncommented\nprint(bytearray('hello', 'utf-8'))  # Output: bytearray(b'hello')\n```"
    },
    {
      "question": "Busy Cats Can Catch Colorful Comets",
      "answer": "bytes(): Returns an immutable sequence of bytes\ncallable(): Checks if an object appears to be callable\nchr(): Returns a character from an integer code point\nclassmethod(): Transforms a method into a class method\ncompile(): Compiles source into a code or AST object\n\n```\nprint(bytes('hello', 'utf-8'))  # Output: b'hello'\nprint(callable(print))  # Output: True\nprint(chr(97))  # Output: 'a'\n\nclass MyClass:\n    @classmethod\n    def class_method(cls):\n        return \"I'm a class method\"\n\nprint(MyClass.class_method())  # Output: I'm a class method\n\ncode = compile('a = 5', '<string>', 'exec')\nexec(code)\nprint(a)  # Output: 5\n```"
    },
    {
      "question": "Clever Dogs Dig Deep Dirt Ditches",
      "answer": "complex(): Creates a complex number\ndelattr(): Deletes an attribute from an object\ndict(): Creates a dictionary\ndir(): Returns a list of valid attributes of an object\ndivmod(): Returns quotient and remainder of division\n\n```\nprint(complex(3, 4))  # Output: (3+4j)\n\nclass MyClass:\n    attr = 'value'\ndelattr(MyClass, 'attr')\nprint(hasattr(MyClass, 'attr'))  # Output: False\n\nprint(dict(a=1, b=2))  # Output: {'a': 1, 'b': 2}\nprint(dir([]))  # Output: ['__add__', '__class__', ...]\nprint(divmod(10, 3))  # Output: (3, 1)\n```"
    },
    {
      "question": "Eager Elephants Eat Every Fruity Fig",
      "answer": "enumerate(): Returns an enumerate object\neval(): Evaluates a Python expression\nexec(): Executes Python code dynamically\nfilter(): Constructs an iterator from elements that are true\nfloat(): Returns a floating point number\n\n```\nprint(list(enumerate(['a', 'b', 'c'])))  # Output: [(0, 'a'), (1, 'b'), (2, 'c')]\nprint(eval('2 + 2'))  # Output: 4\nexec('x = 10')\nprint(x)  # Output: 10\nprint(list(filter(lambda x: x > 5, [2, 4, 6, 8, 10])))  # Output: [6, 8, 10]\nprint(float('3.14'))  # Output: 3.14\n```"
    },
    {
      "question": "Funny Foxes Find Fresh Green Herbs",
      "answer": "format(): Formats a specified value\nfrozenset(): Returns an immutable set\ngetattr(): Returns the value of a named attribute of an object\nglobals(): Returns the current global symbol table as a dictionary\nhasattr(): Returns whether the object has an attribute with the given name\n\n```\nprint(format(0.5, '%'))  # Output: 50.000000%\nprint(frozenset([1, 2, 3, 1]))  # Output: frozenset({1, 2, 3})\n\nclass MyClass:\n    attr = 'value'\n\nprint(getattr(MyClass, 'attr'))  # Output: value\nprint(globals())  # Output: {...}\nprint(hasattr(MyClass, 'attr'))  # Output: True\n```"
    },
    {
      "question": "Happy Hippos Help Hungry Hyenas Instantly",
      "answer": "hash(): Returns the hash value of an object\nhelp(): Invokes the built-in help system\nhex(): Converts an integer to a hexadecimal string\nid(): Returns the identity of an object\ninput(): Reads a line from input, converts it to a string and returns it\n\n```\nprint(hash('python'))  # Output: 2230730083538390373 (may vary)\n# help(print)  # Displays help for print function\nprint(hex(255))  # Output: 0xff\nprint(id([]))  # Output: 140715651199752 (may vary)\n# name = input(\"Enter your name: \")\n# print(f\"Hello, {name}\")\n```"
    },
    {
      "question": "Intelligent Iguanas Invent Interesting Itchy Lotion",
      "answer": "int(): Returns an integer object constructed from a number or string\nisinstance(): Returns whether an object is an instance of a class or subclass thereof\nissubclass(): Returns whether a class is a subclass of another class\niter(): Returns an iterator object\nlen(): Returns the length (number of items) of an object\n\n```\nprint(int('100', 2))  # Output: 4\nprint(isinstance(5, int))  # Output: True\nprint(issubclass(bool, int))  # Output: True\nit = iter([1, 2, 3])\nprint(next(it))  # Output: 1\nprint(len([1, 2, 3]))  # Output: 3\n```"
    },
    {
      "question": "Little Lions Like Loud Monkey Music",
      "answer": "list(): Creates a list object\nlocals(): Returns a dictionary representing the current local symbol table\nmap(): Applies a function to all the items in an input list\nmax(): Returns the largest item in an iterable or the largest of two or more arguments\nmemoryview(): Returns a memory view object from a specified object\n\n```\nprint(list('python'))  # Output: ['p', 'y', 't', 'h', 'o', 'n']\nprint(locals())  # Output: {...}\nprint(list(map(lambda x: x**2, [1, 2, 3])))  # Output: [1, 4, 9]\nprint(max([1, 5, 3, 2]))  # Output: 5\nmv = memoryview(b'abc')\nprint(mv[0])  # Output: 97\n```"
    },
    {
      "question": "Merry Mice Never Open Old Ovens",
      "answer": "min(): Returns the smallest item in an iterable or the smallest of two or more arguments\nnext(): Retrieves the next item from the iterator\nobject(): Returns a new featureless object\noct(): Converts an integer to an octal string\nopen(): Opens a file and returns a file object\n\n```\nprint(min([1, 5, 3, 2]))  # Output: 1\nit = iter([1, 2, 3])\nprint(next(it))  # Output: 1\nprint(object())  # Output: <object object at 0x...>\nprint(oct(8))  # Output: 0o10\n# with open('file.txt', 'w') as f:\n#     f.write('Hello, World!')\n```"
    },
    {
      "question": "Odd Octopuses Often Paint Purple Rugs",
      "answer": "ord(): Returns an integer representing the Unicode code point of a character\npow(): Returns base to the power of exp; if mod is present, returns base to the power of exp, modulo mod\nprint(): Prints objects to the text stream file\nproperty(): Returns a property attribute\nrange(): Returns an immutable sequence type\n\n```\nprint(ord('A'))  # Output: 65\nprint(pow(2, 3))  # Output: 8\nprint(pow(2, 3, 5))  # Output: 3\nprint('Hello, World!')  # Output: Hello, World!\n\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def diameter(self):\n        return self._radius * 2\n\nc = Circle(5)\nprint(c.diameter)  # Output: 10\n\nprint(list(range(5)))  # Output: [0, 1, 2, 3, 4]\n```"
    },
    {
      "question": "Red Rabbits Rarely Ride Speedy Sleds",
      "answer": "repr(): Returns a string containing a printable representation of an object\nreversed(): Returns a reverse iterator\nround(): Returns a number rounded to ndigits precision after the decimal point\nset(): Returns a new set object\nsetattr(): Sets the value of the named attribute of an object\n\n```\nprint(repr('Hello'))  # Output: \"'Hello'\"\nprint(list(reversed([1, 2, 3])))  # Output: [3, 2, 1]\nprint(round(3.14159, 2))  # Output: 3.14\nprint(set([1, 2, 2, 3]))  # Output: {1, 2, 3}\n\nclass MyClass:\n    pass\n\nobj = MyClass()\nsetattr(obj, 'x', 5)\nprint(obj.x)  # Output: 5\n```"
    },
    {
      "question": "Silly Snakes Slide Straight South Sometimes",
      "answer": "slice(): Returns a slice object\nsorted(): Returns a new sorted list from the items in iterable\nstaticmethod(): Transforms a method into a static method\nstr(): Returns a string version of an object\nsum(): Sums start and the items of an iterable from left to right and returns the total\n\n```\ns = slice(1, 5, 2)\nprint([1, 2, 3, 4, 5][s])  # Output: [2, 4]\nprint(sorted([3, 1, 4, 1, 5, 9, 2]))  # Output: [1, 1, 2, 3, 4, 5, 9]\n\nclass MyClass:\n    @staticmethod\n    def static_method():\n        return \"I'm a static method\"\n\nprint(MyClass.static_method())  # Output: I'm a static method\n\nprint(str(123))  # Output: '123'\nprint(sum([1, 2, 3, 4, 5]))  # Output: 15\n```"
    },
    {
      "question": "Smart Turtles Try Various Zippy Zones",
      "answer": "super(): Returns a proxy object that delegates method calls to a parent or sibling class\ntuple(): Creates a tuple\ntype(): Returns the type of an object or creates a new type object\nvars(): Returns the __dict__ attribute for a module, class, instance, or any other object with a __dict__ attribute\nzip(): Creates an iterator of tuples where the i-th tuple contains the i-th element from each of the input iterables\n\n```\nclass Parent:\n    def greet(self):\n        return \"I'm the parent\"\n\nclass Child(Parent):\n    def greet(self):\n        return super().greet() + \" and I'm the child\"\n\nprint(Child().greet())  # Output: I'm the parent and I'm the child\n\nprint(tuple([1, 2, 3]))  # Output: (1, 2, 3)\nprint(type(5))  # Output: <class 'int'>\nprint(vars())  # Output: {...}\nprint(list(zip([1, 2, 3], ['a', 'b', 'c'])))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]\n```"
    }
  ],

  pandasOperations: [
    {
      "question": "Daring Lions Melt Cheese Sandwiches",
      "answer": "D - DataFrame from Dictionary: Create a dataframe from a dictionary of lists\nL - Lists to DataFrame: Create a dataframe from lists of values\nM - Melt: Transform columns into rows\nC - Concatenate DataFrames: Combine dataframes by rows or columns\nS - Sort Values: Sort rows by values in a column\n\nExamples:\n```\n# DataFrame from Dictionary\ndf = pd.DataFrame({\"a\": [4, 5, 6], \"b\": [7, 8, 9], \"c\": [10, 11, 12]}, index=[1, 2, 3])\nprint(df)\n   a  b   c\n1  4  7  10\n2  5  8  11\n3  6  9  12\n\n# Lists to DataFrame\ndf = pd.DataFrame([[4, 7, 10], [5, 8, 11], [6, 9, 12]], index=[1, 2, 3], columns=['a', 'b', 'c'])\nprint(df)\n   a  b   c\n1  4  7  10\n2  5  8  11\n3  6  9  12\n\n# Melt\nmelted_df = pd.melt(df)\nprint(melted_df)\n  variable  value\n0        a      4\n1        a      5\n2        a      6\n3        b      7\n4        b      8\n5        b      9\n6        c     10\n7        c     11\n8        c     12\n\n# Concatenate DataFrames\ndf1 = pd.DataFrame({'A': ['A0', 'A1'], 'B': ['B0', 'B1']})\ndf2 = pd.DataFrame({'A': ['A2', 'A3'], 'B': ['B2', 'B3']})\nresult = pd.concat([df1, df2])\nprint(result)\n    A   B\n0  A0  B0\n1  A1  B1\n0  A2  B2\n1  A3  B3\n\n# Sort Values\ndf = pd.DataFrame({'col1': [2, 1, 3], 'col2': ['b', 'c', 'a']})\nsorted_df = df.sort_values('col1')\nprint(sorted_df)\n   col1 col2\n1     1    c\n0     2    b\n2     3    a\n```"
    },
    {
      "question": "Silly Rabbits Flip Dimes Fast",
      "answer": "S - Select Columns: Choose specific columns from the dataframe\nR - Rows by Index: Select rows based on index positions\nF - Filter Rows: Filter rows based on a condition\nD - Drop NA: Remove rows with missing data\nF - Fill NA: Fill missing values with a specified value\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6], 'C': [7, 8, 9]})\n\n# Select Columns\nprint(df[['A', 'B']])\n   A  B\n0  1  4\n1  2  5\n2  3  6\n\n# Rows by Index\nprint(df.iloc[1:3])\n   A  B  C\n1  2  5  8\n2  3  6  9\n\n# Filter Rows\nprint(df[df['A'] > 1])\n   A  B  C\n1  2  5  8\n2  3  6  9\n\n# Drop NA\ndf_with_na = pd.DataFrame({'A': [1, 2, np.nan], 'B': [4, np.nan, 6], 'C': [7, 8, 9]})\nprint(df_with_na.dropna())\n     A    B  C\n0  1.0  4.0  7\n\n# Fill NA\nprint(df_with_na.fillna(0))\n     A    B  C\n0  1.0  4.0  7\n1  2.0  0.0  8\n2  0.0  6.0  9\n```"
    },
    {
      "question": "Descriptive Sums Mean, Reading Works",
      "answer": "D - Descriptive Statistics: Provide summary statistics for each column\nS - Sum: Calculate the sum of values in a column or dataframe\nM - Mean: Calculate the average of a column's values\nR - Read CSV: Read data from a CSV file\nW - Write CSV: Write dataframe data to a CSV file\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 4], 'B': [5, 6, 7, 8], 'C': [9, 10, 11, 12]})\n\n# Descriptive Statistics\nprint(df.describe())\n              A         B          C\ncount  4.000000  4.000000   4.000000\nmean   2.500000  6.500000  10.500000\nstd    1.290994  1.290994   1.290994\nmin    1.000000  5.000000   9.000000\n25%    1.750000  5.750000   9.750000\n50%    2.500000  6.500000  10.500000\n75%    3.250000  7.250000  11.250000\nmax    4.000000  8.000000  12.000000\n\n# Sum\nprint(df.sum())\nA    10\nB    26\nC    42\ndtype: int64\n\n# Mean\nprint(df.mean())\nA     2.5\nB     6.5\nC    10.5\ndtype: float64\n\n# Read CSV (assuming 'data.csv' exists)\n# data.csv content:\n# A,B,C\n# 1,5,9\n# 2,6,10\n# 3,7,11\n# 4,8,12\ndf = pd.read_csv('data.csv')\nprint(df)\n   A  B   C\n0  1  5   9\n1  2  6  10\n2  3  7  11\n3  4  8  12\n\n# Write CSV\ndf.to_csv('output.csv', index=False)\n# This will create a new file 'output.csv' with the same content as above\n```"
    },
    {
      "question": "Many Bears Reset Slice Magic",
      "answer": "M - MultiIndex: Set multiple columns as the index\nR - Reset Index: Reset the index of the dataframe\nS - Slicing MultiIndex: Slice data based on multi-level index\nM - Merge DataFrames: Merge dataframes based on a key\nS - Set-Like Operations: Merge dataframes using union or intersection\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 4], 'B': [5, 6, 7, 8], 'C': [9, 10, 11, 12], 'D': ['a', 'b', 'a', 'b']})\n\n# MultiIndex\ndf_multi = df.set_index(['A', 'D'])\nprint(df_multi)\n       B   C\nA D        \n1 a   5   9\n2 b   6  10\n3 a   7  11\n4 b   8  12\n\n# Reset Index\ndf_reset = df_multi.reset_index()\nprint(df_reset)\n   A  D  B   C\n0  1  a  5   9\n1  2  b  6  10\n2  3  a  7  11\n3  4  b  8  12\n\n# Slicing MultiIndex\nprint(df_multi.loc[(2, 'b')])\nB     6\nC    10\nName: (2, b), dtype: int64\n\n# Merge DataFrames\ndf1 = pd.DataFrame({'key': ['K0', 'K1', 'K2'], 'A': ['A0', 'A1', 'A2']})\ndf2 = pd.DataFrame({'key': ['K0', 'K1', 'K2'], 'B': ['B0', 'B1', 'B2']})\nmerged = pd.merge(df1, df2, on='key')\nprint(merged)\n  key   A   B\n0  K0  A0  B0\n1  K1  A1  B1\n2  K2  A2  B2\n\n# Set-Like Operations\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [1, 3], 'B': [3, 5]})\nunion = pd.merge(df1, df2, how='outer')\nprint(union)\n   A    B\n0  1  3.0\n1  2  4.0\n2  3  5.0\n```"
    },
    {
      "question": "Groups Are Rolling Everywhere Sometimes",
      "answer": "G - Group By Column: Group the data by a specific column\nA - Aggregate Functions: Perform aggregation operations like sum or mean on groups\nR - Rolling Window: Apply rolling window calculations like mean\nE - Expanding Window: Apply cumulative calculations like sum over expanding windows\nS - Resample Data: Resample time series data over a specified period\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar'],\n                   'B': [1, 2, 3, 4, 5, 6],\n                   'C': [2.0, 5., 8., 1., 2., 9.]})\n\n# Group By Column\ngroup = df.groupby('A')\nprint(group.sum())\n     B     C\nA            \nbar  12  15.0\nfoo   9  12.0\n\n# Aggregate Functions\nprint(group.agg({'B': 'sum', 'C': 'mean'}))\n      B    C\nA            \nbar  12  5.0\nfoo   9  4.0\n\n# Create a time series DataFrame\ndf_ts = pd.DataFrame({'A': range(10)}, \n                     index=pd.date_range('2023-01-01', periods=10, freq='D'))\n\n# Rolling Window\nprint(df_ts.rolling(window=3).mean())\n              A\n2023-01-01  NaN\n2023-01-02  NaN\n2023-01-03  1.0\n2023-01-04  2.0\n2023-01-05  3.0\n2023-01-06  4.0\n2023-01-07  5.0\n2023-01-08  6.0\n2023-01-09  7.0\n2023-01-10  8.0\n\n# Expanding Window\nprint(df_ts.expanding().sum())\n               A\n2023-01-01   0.0\n2023-01-02   1.0\n2023-01-03   3.0\n2023-01-04   6.0\n2023-01-05  10.0\n2023-01-06  15.0\n2023-01-07  21.0\n2023-01-08  28.0\n2023-01-09  36.0\n2023-01-10  45.0\n\n# Resample Data\nprint(df_ts.resample('3D').mean())\n              A\n2023-01-01  1.0\n2023-01-04  4.0\n2023-01-07  7.0\n2023-01-10  9.0\n```"
    },
    {
      "question": "Strings Combine With Strong Dataframes",
      "answer": "S - String Methods: Apply string operations to dataframe columns\nC - Convert to Categorical: Convert a column to categorical data type\nW - Binning: Bin continuous data into intervals\nS - Scatter Plot: Create a scatter plot of two columns\nD - Plot Histogram: Create a histogram for dataframe columns\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'text': ['hello', 'world', 'python'],\n                   'value': [10, 20, 30]})\n\n# String Methods\nprint(df['text'].str.upper())\n0    HELLO\n1    WORLD\n2    PYTHON\nName: text, dtype: object\n\n# Convert to Categorical\ndf['text'] = df['text'].astype('category')\nprint(df['text'].dtype)\ncategory\n\n# Binning\ndf['bins'] = pd.cut(df['value'], bins=3)\nprint(df)\n     text  value      bins\n0  hello     10  (9.9, 20.0]\n1  world     20  (19.9, 30.0]\n2  python    30  (19.9, 30.0]\n\n# Scatter Plot (this would generate a plot)\ndf.plot.scatter(x='value', y='value')\n\n# Histogram (this would generate a plot)\ndf['value'].plot.hist()\n```"
    },
    {
      "question": "Optimize Pandas Columns, Evaluate Quickly",
      "answer": "O - Optimize Memory: Optimize memory usage by changing data types\nP - Pandas Eval: Perform fast operations with eval\nC - Apply Aggregations: Apply multiple aggregation functions to groups\nE - Apply Transformations: Apply transformations to group data\nQ - Detect Duplicates: Find and remove duplicate rows\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 3],\n                   'B': [4.0, 5.0, 6.0, 6.0],\n                   'C': ['a', 'b', 'c', 'c']})\n\n# Optimize Memory\ndf['A'] = df['A'].astype('int8')\nprint(df.dtypes)\nA      int8\nB    float64\nC     object\ndtype: object\n\n# Pandas Eval\ndf.eval('D = A + B')\nprint(df)\n   A    B  C     D\n0  1  4.0  a   5.0\n1  2  5.0  b   7.0\n2  3  6.0  c   9.0\n3  3  6.0  c   9.0\n\n# Apply Aggregations\nprint(df.groupby('C').agg({'A': 'sum', 'B': 'mean'}))\n   A    B\nC          \na  1  4.0\nb  2  5.0\nc  6  6.0\n\n# Apply Transformations\ndf['A_mean'] = df.groupby('C')['A'].transform('mean')\nprint(df)\n   A    B  C     D  A_mean\n0  1  4.0  a   5.0     1.0\n1  2  5.0  b   7.0     2.0\n2  3  6.0  c   9.0     3.0\n3  3  6.0  c   9.0     3.0\n\n# Detect Duplicates\nprint(df.drop_duplicates())\n   A    B  C     D  A_mean\n0  1  4.0  a   5.0     1.0\n1  2  5.0  b   7.0     2.0\n2  3  6.0  c   9.0     3.0\n```"
    },
    {
      "question": "Pivot Time Cares Sparsely and Merges More",
      "answer": "P - Pivot Tables: Reshape data using pivot tables\nT - Time Series Analysis: Analyze and manipulate time series data\nC - Categorical Data Optimization: Convert to categorical type for memory efficiency\nS - Sparse Data Handling: Use sparse structures for large datasets\nM - Advanced Joins and Merges: Perform complex joins with multiple keys\n\nExamples:\n```\n# Create sample DataFrames\ndf = pd.DataFrame({'A': ['foo', 'foo', 'bar', 'bar'],\n                   'B': ['one', 'two', 'one', 'two'],\n                   'C': [1, 2, 3, 4],\n                   'D': pd.date_range('20230101', periods=4)})\ndf2 = pd.DataFrame({'key1': ['foo', 'bar'], 'key2': [1, 2], 'value': [5, 6]})\n\n# Pivot Tables\nprint(df.pivot_table(values='C', index='A', columns='B', aggfunc='sum'))\nB    one  two\nA            \nbar    3    4\nfoo    1    2\n\n# Time Series Analysis\ndf.set_index('D', inplace=True)\nprint(df.resample('2D').sum())\n            C\nD            \n2023-01-01  3\n2023-01-03  7\n\n# Categorical Data Optimization\ndf['A'] = df['A'].astype('category')\nprint(df['A'].dtype)\ncategory\n\n# Sparse Data Handling\nsparse_df = pd.DataFrame(pd.arrays.SparseArray([0, 0, 1, 1]))\nprint(sparse_df.dtypes)\n0    Sparse[int64, use_na=False]\ndtype: object\n\n# Advanced Joins and Merges\nresult = pd.merge(df.reset_index(), df2, left_on=['A', 'C'], right_on=['key1', 'key2'])\nprint(result)\n           D    A    B  C key1  key2  value\n0 2023-01-01  foo  one  1  foo     1      5\n1 2023-01-03  bar  one  3  bar     2      6\n```"
    },
    {
      "question": "Custom Windows Slice Many Dataframes",
      "answer": "C - Custom Aggregations: Apply custom functions during group operations\nW - Window Functions: Use rolling and expanding functions for time-based calculations\nS - Multi-level Indexing and Slicing: Use hierarchical indexing for complex manipulation\nM - Explode List-Like Columns: Transform list columns into separate rows\nA - Apply Functions: Apply functions across columns or rows\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': [1, 2, 3, 4, 5],\n                   'B': [10, 20, 30, 40, 50],\n                   'C': pd.date_range('20230101', periods=5),\n                   'D': [['a', 'b'], ['c'], ['d', 'e', 'f'], ['g'], ['h', 'i']]})\ndf.set_index('C', inplace=True)\n\n# Custom Aggregations\ndef custom_agg(x):\n    return x.max() - x.min()\n\nprint(df.groupby(df.index.day).agg(custom_agg))\n     A   B\nC          \n1   0   0\n2   1  10\n3   2  20\n4   3  30\n5   4  40\n\n# Window Functions\nprint(df['A'].rolling(window=3).mean())\nC\n2023-01-01         NaN\n2023-01-02         NaN\n2023-01-03    2.000000\n2023-01-04    3.000000\n2023-01-05    4.000000\nFreq: D, Name: A, dtype: float64\n\n# Multi-level Indexing and Slicing\ndf2 = df.copy()\ndf2['E'] = ['x', 'y', 'z', 'x', 'y']\ndf2.set_index(['E', df2.index], inplace=True)\nprint(df2.loc['x'])\n                A   B           D\nC                              \n2023-01-01    1  10     [a, b]\n2023-01-04    4  40        [g]\n\n# Explode List-Like Columns\nprint(df.explode('D'))\n             A   B           D\nC                            \n2023-01-01   1  10          a\n2023-01-01   1  10          b\n2023-01-02   2  20          c\n2023-01-03   3  30          d\n2023-01-03   3  30          e\n2023-01-03   3  30          f\n2023-01-04   4  40          g\n2023-01-05   5  50          h\n2023-01-05   5  50          i\n\n# Apply Functions\nprint(df.apply(lambda x: x.max() - x.min()))\nA      4\nB     40\nD    NaN\ndtype: float64\n```"
    },
    {
      "question": "Map Queries Pivot Categorical Samples",
      "answer": "M - Mapping and Replacing Values: Replace or map values using dictionaries\nQ - Query: Use query language to filter data\nP - Pivot: Reshape data with columns becoming index\nC - Categorical Data: Efficiently store and manipulate categorical data\nS - Sampling Data: Randomly sample rows from the dataframe\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'bar', 'baz', 'foo', 'bar'],\n                   'B': [1, 2, 3, 4, 5],\n                   'C': [10, 20, 30, 40, 50]})\n\n# Mapping and Replacing Values\nmap_dict = {'foo': 'FOO', 'bar': 'BAR', 'baz': 'BAZ'}\nprint(df['A'].map(map_dict))\n0    FOO\n1    BAR\n2    BAZ\n3    FOO\n4    BAR\nName: A, dtype: object\n\n# Query\nprint(df.query('B > 2 and C < 50'))\n     A  B   C\n2  baz  3  30\n3  foo  4  40\n\n# Pivot\npivoted = df.pivot(index='A', columns='B', values='C')\nprint(pivoted)\nB    1     2     3     4     5\nA                              \nbar  NaN  20.0   NaN   NaN  50.0\nbaz  NaN   NaN  30.0   NaN   NaN\nfoo  10.0   NaN   NaN  40.0   NaN\n\n# Categorical Data\ndf['A'] = df['A'].astype('category')\nprint(df['A'].dtype)\ncategory\n\n# Sampling Data\nprint(df.sample(n=3, random_state=1))\n     A  B   C\n1  bar  2  20\n4  bar  5  50\n2  baz  3  30\n```"
    },
    {
      "question": "Chain Datetimes Rank Groups Effectively",
      "answer": "C - Chaining Operations: Perform multiple operations in a single chain\nD - Datetime Operations: Work with datetime data efficiently\nR - Rank: Assign ranks to entries based on values\nG - Groupby with Multiple Aggregations: Apply multiple functions to grouped data\nE - Efficient Use of Datatypes: Optimize data types to reduce memory usage\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'bar', 'foo', 'bar', 'foo', 'bar'],\n                   'B': [1, 2, 3, 4, 5, 6],\n                   'C': pd.date_range('20230101', periods=6)})\n\n# Chaining Operations\nresult = (df.groupby('A')\n            .agg({'B': 'sum'})\n            .sort_values('B', ascending=False)\n            .reset_index())\nprint(result)\n     A   B\n0  bar  12\n1  foo   9\n\n# Datetime Operations\ndf['year'] = df['C'].dt.year\ndf['month'] = df['C'].dt.month\ndf['day'] = df['C'].dt.day\nprint(df)\n     A  B          C  year  month  day\n0  foo  1  2023-01-01  2023      1    1\n1  bar  2  2023-01-02  2023      1    2\n2  foo  3  2023-01-03  2023      1    3\n3  bar  4  2023-01-04  2023      1    4\n4  foo  5  2023-01-05  2023      1    5\n5  bar  6  2023-01-06  2023      1    6\n\n# Rank\ndf['rank'] = df['B'].rank(method='dense')\nprint(df['rank'])\n0    1.0\n1    2.0\n2    3.0\n3    4.0\n4    5.0\n5    6.0\nName: rank, dtype: float64\n\n# Groupby with Multiple Aggregations\nprint(df.groupby('A').agg({'B': ['sum', 'mean'], 'C': 'max'}))\n     B                    C\n   sum      mean        max\nA                          \nbar  12  4.000000 2023-01-06\nfoo   9  3.000000 2023-01-05\n\n# Efficient Use of Datatypes\ndf['B'] = df['B'].astype('int8')\nprint(df.dtypes)\nA             object\nB               int8\nC     datetime64[ns]\nyear            int64\nmonth           int64\nday             int64\nrank          float64\ndtype: object\n```"
    },
    {
      "question": "Crosses Stack Apps Explode Interpolated Zones",
      "answer": "C - Cross Tabulation: Create cross-tabulation of two or more factors\nS - Pivoting with Stacking and Unstacking: Pivot indices to columns and vice versa\nA - Applymap: Apply a function element-wise to a dataframe\nE - Explode List-Like Columns: Transform list columns into separate rows\nI - Interpolation: Fill missing values using interpolation methods\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': ['foo', 'foo', 'bar', 'bar', 'foo', 'bar'],\n                   'B': ['one', 'one', 'one', 'two', 'two', 'two'],\n                   'C': [1, 2, 3, 4, 5, 6],\n                   'D': [['a', 'b'], ['c'], ['d', 'e'], ['f'], ['g', 'h'], ['i', 'j']]})\n\n# Cross Tabulation\nprint(pd.crosstab(df.A, df.B))\nB    one  two\nA            \nbar    1    2\nfoo    2    1\n\n# Pivoting with Stacking and Unstacking\ndf_pivot = df.pivot(index='A', columns='B', values='C')\nprint(df_pivot)\nB    one  two\nA            \nbar  3.0  5.0\nfoo  1.5  5.0\n\nprint(df_pivot.stack())\nA    B  \nbar  one    3.0\n     two    5.0\nfoo  one    1.5\n     two    5.0\ndtype: float64\n\n# Applymap\nprint(df_pivot.applymap(lambda x: f'{x:.1f}' if pd.notnull(x) else 'N/A'))\nB   one two\nA           \nbar 3.0 5.0\nfoo 1.5 5.0\n\n# Explode List-Like Columns\nprint(df.explode('D'))\n     A    B  C  D\n0  foo  one  1  a\n0  foo  one  1  b\n1  foo  one  2  c\n2  bar  one  3  d\n2  bar  one  3  e\n3  bar  two  4  f\n4  foo  two  5  g\n4  foo  two  5  h\n5  bar  two  6  i\n5  bar  two  6  j\n\n# Interpolation\ndf_interp = pd.DataFrame({'A': [1, 2, np.nan, 4, 5, np.nan, 7]})\nprint(df_interp.interpolate())\n     A\n0  1.0\n1  2.0\n2  3.0\n3  4.0\n4  5.0\n5  6.0\n6  7.0\n```"
    },
    {
      "question": "Pipes Sparse Index Access Parallel Profiles",
      "answer": "P - Method Chaining with pipe(): Apply custom functions in method chains\nS - Sparse Matrices: Handle sparse matrices efficiently\nI - Custom Indexing with pd.IndexSlice: Make complex selections in multi-level index\nA - Efficient .at and .iat Accessors: Use for faster scalar access\nP - Multi-threading with swifter: Parallelize apply functions for performance\n\nExamples:\n```\n# Create a sample DataFrame\ndf = pd.DataFrame({'A': range(5), 'B': range(5, 10)})\n\n# Method Chaining with pipe()\ndef add_one(dataframe):\n    return dataframe + 1\n\nresult = (df.pipe(add_one)\n            .pipe(lambda x: x ** 2)\n            .sum())\nprint(result)\nA     55\nB    255\ndtype: int64\n\n# Sparse Matrices\nsparse_df = pd.DataFrame(pd.arrays.SparseArray([0, 0, 1, 1, 0, 0, 2, 2]))\nprint(sparse_df.dtypes)\n0    Sparse[int64, use_na=False]\ndtype: object\n\n# Custom Indexing with pd.IndexSlice\ndf = pd.DataFrame(np.random.randn(4, 5),\n                  index=[['A', 'A', 'B', 'B'], [1, 2, 1, 2]],\n                  columns=['a', 'b', 'c', 'd', 'e'])\nidx = pd.IndexSlice\nprint(df.loc[idx[:, 2], ['a', 'c', 'e']])\n            a         c         e\nA 2 -0.503740 -0.766409  0.088608\nB 2  0.306065  0.392768  0.644275\n\n# Efficient .at and .iat Accessors\nprint(df.iat[0, 0])  # Fast integer-location based access\n-0.3526121499210274\n\n# Multi-threading with swifter\n# Note: This requires the swifter library to be installed\n# import swifter\n# df['new_col'] = df['A'].swifter.apply(lambda x: x ** 2)\n# print(df['new_col'])\n```"
    },
    {
      "question": "Assign Dask Chunks Profile Sparse",
      "answer": "A - Chaining Methods with assign(): Add or modify columns without breaking chain\nD - Handling Large Datasets with Dask: Work with larger-than-memory datasets\nC - Chunk Processing for Large Files: Read large CSV files in chunks\nP - Memory Profiling with pandas_profiling: Generate detailed data profiling reports\nS - Sparse Data Handling: Handle sparse matrices for memory-efficient storage\n\nExamples:\n```python\ndf.assign(new_col=df['col1'] + df['col2'], another_col=df['col3'] / 2)\ndf = dd.read_csv('large_file.csv')\nfor chunk in pd.read_csv('large_file.csv', chunksize=1000000):\n    process(chunk)\nprofile = ProfileReport(df)\ndf.sparse.to_dense()\n```"
    }
  ],

  numpyOperations: [
    {
      "question": "Awesome Zebras Only Find Elephants",
      "answer": "A - np.array(): Creates a NumPy array from a list or iterable\nZ - np.zeros(): Creates an array filled with zeros\nO - np.ones(): Creates an array filled with ones\nF - np.full(): Creates an array filled with a specified value\nE - np.empty(): Creates an uninitialized array (contents may vary)\n\nExamples:\n```\nimport numpy as np\n\narr = np.array([1, 2, 3])\nprint(arr)\n# Output: [1 2 3]\n\narr = np.zeros((2, 3))\nprint(arr)\n# Output:\n# [[0. 0. 0.]\n#  [0. 0. 0.]]\n\narr = np.ones((2, 3))\nprint(arr)\n# Output:\n# [[1. 1. 1.]\n#  [1. 1. 1.]]\n\narr = np.full((2, 3), 7)\nprint(arr)\n# Output:\n# [[7 7 7]\n#  [7 7 7]]\n\narr = np.empty((2, 3))\nprint(arr)\n# Output (may vary):\n# [[1.64919197e-316 0.00000000e+000 6.93987449e-310]\n#  [6.93987449e-310 6.93987449e-310 0.00000000e+000]]\n```"
    },
    {
      "question": "Elephants Always Love Random Ranges",
      "answer": "E - np.eye(): Creates a 2D identity matrix with ones on the diagonal\nA - np.arange(): Returns evenly spaced values within a given interval\nL - np.linspace(): Returns evenly spaced numbers over a specified range\nR - np.random.rand(): Generates random numbers uniformly distributed between 0 and 1\nR - np.random.randn(): Generates random numbers from a standard normal distribution\n\nExamples:\n```\narr = np.eye(3)\nprint(arr)\n# Output:\n# [[1. 0. 0.]\n#  [0. 1. 0.]\n#  [0. 0. 1.]]\n\narr = np.arange(0, 10, 2)\nprint(arr)\n# Output: [0 2 4 6 8]\n\narr = np.linspace(0, 1, 5)\nprint(arr)\n# Output: [0.   0.25 0.5  0.75 1.  ]\n\narr = np.random.rand(3)\nprint(arr)\n# Output (may vary): [0.123456 0.987654 0.555555]\n\narr = np.random.randn(3)\nprint(arr)\n# Output (may vary): [-0.123  1.987 -0.345]\n```"
    },
    {
      "question": "Rand Shapes Need Data Sizes",
      "answer": "R - np.random.randint(): Generates random integers from a specified range\nS - .shape: Returns the shape of an array (dimensions)\nN - .ndim: Returns the number of dimensions of the array\nD - .dtype: Returns the data type of the array elements\nS - .size: Returns the number of elements in the array\n\nExamples:\n```\narr = np.random.randint(0, 10, size=5)\nprint(arr)\n# Output (may vary): [3 7 3 2 9]\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr.shape)\n# Output: (2, 3)\n\nprint(arr.ndim)\n# Output: 2\n\nprint(arr.dtype)\n# Output: int64\n\nprint(arr.size)\n# Output: 6\n```"
    },
    {
      "question": "Items Need Bytes Fast Slices",
      "answer": "I - .itemsize: Returns the size of each element in bytes\nN - .nbytes: Returns the total number of bytes consumed by the array\nB - Single element indexing: Access a single element by its index\nF - Slicing (start:stop): Slice an array using start, stop, and step values\nS - Boolean masking: Filter elements of an array using a boolean condition\n\nExamples:\n```\narr = np.array([[1, 2, 3], [4, 5, 6]])\n\nprint(arr.itemsize)\n# Output: 8\n\nprint(arr.nbytes)\n# Output: 48\n\nprint(arr[0, 1])\n# Output: 2\n\nprint(arr[:, 1:3])\n# Output:\n# [[2 3]\n#  [5 6]]\n\nprint(arr[arr > 3])\n# Output: [4 5 6]\n```"
    },
    {
      "question": "Fancy Reshapes Flatten Expands Transposes",
      "answer": "F - Fancy indexing: Use arrays of indices to access elements in an array\nR - np.reshape(): Reshape an array to a new shape\nF - np.ravel() and np.flatten(): Flatten an array into a 1D array\nE - np.expand_dims(): Expand the dimensions of an array\nT - np.transpose(): Transpose the dimensions of an array\n\nExamples:\n```\nindices = [0, 2]\narr = np.array([10, 20, 30, 40])\nprint(arr[indices])\n# Output: [10 30]\n\narr = np.array([1, 2, 3, 4, 5, 6])\nreshaped = np.reshape(arr, (2, 3))\nprint(reshaped)\n# Output:\n# [[1 2 3]\n#  [4 5 6]]\n\nprint(reshaped.ravel())\n# Output: [1 2 3 4 5 6]\n\nprint(reshaped.flatten())\n# Output: [1 2 3 4 5 6]\n\nexpanded = np.expand_dims(arr, axis=0)\nprint(expanded)\n# Output: [[1 2 3 4 5 6]]\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\ntransposed = np.transpose(arr)\nprint(transposed)\n# Output:\n# [[1 4]\n#  [2 5]\n#  [3 6]]\n```"
    },
    {
      "question": "Squeeze Swap Adds Multiplies Broadcasts",
      "answer": "S - np.squeeze(): Remove single-dimensional entries from an array\nS - np.swapaxes(): Swap two axes of an array\nA - Arithmetic operations (+, -): Perform element-wise addition and subtraction\nM - Arithmetic operations (*, /): Perform element-wise multiplication and division\nB - Broadcasting: Allows operations on arrays of different shapes\n\nExamples:\n```\narr = np.array([[[1, 2, 3]]])\nsqueezed = np.squeeze(arr)\nprint(squeezed)\n# Output: [1 2 3]\n\narr = np.array([[1, 2, 3], [4, 5, 6]])\nswapped = np.swapaxes(arr, 0, 1)\nprint(swapped)\n# Output:\n# [[1 4]\n#  [2 5]\n#  [3 6]]\n\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\nprint(arr1 + arr2)\n# Output: [5 7 9]\nprint(arr1 * arr2)\n# Output: [4 10 18]\n\narr1 = np.array([1, 2, 3])\narr2 = np.array([[1], [2], [3]])\nprint(arr1 + arr2)\n# Output:\n# [[2 3 4]\n#  [3 4 5]\n#  [4 5 6]]\n```"
    },
    {
      "question": "Cats, Horses, and Dogs Stack Splits Like Blocks Horizontally and Vertically",
      "answer": "C - np.concatenate(): Concatenates two or more arrays along an axis\nH - np.hstack(): Stacks arrays horizontally (column-wise)\nV - np.vstack(): Stacks arrays vertically (row-wise)\nD - np.dstack(): Stacks arrays along the depth (third dimension)\nS - np.split(): Splits an array into multiple sub-arrays\n\nExamples:\n```\nimport numpy as np\n\n# concatenate\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6]])\nresult = np.concatenate((arr1, arr2), axis=0)\nprint(result)\n# Output:\n# [[1 2]\n#  [3 4]\n#  [5 6]]\n\n# hstack\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\nresult = np.hstack((arr1, arr2))\nprint(result)\n# Output: [1 2 3 4 5 6]\n\n# vstack\nresult = np.vstack((arr1, arr2))\nprint(result)\n# Output:\n# [[1 2 3]\n#  [4 5 6]]\n\n# dstack\narr1 = np.array([[1, 2], [3, 4]])\narr2 = np.array([[5, 6], [7, 8]])\nresult = np.dstack((arr1, arr2))\nprint(result)\n# Output:\n# [[[1 5]\n#   [2 6]]\n#  [[3 7]\n#   [4 8]]]\n\n# split\narr = np.array([1, 2, 3, 4, 5, 6])\nresult = np.split(arr, 3)\nprint(result)\n# Output: [array([1, 2]), array([3, 4]), array([5, 6])]\n```"
    },
    {
      "question": "Splitting Arrays Brings Horizontal and Vertical Joy",
      "answer": "S - np.array_split(): Splits an array into multiple sub-arrays, even if they don't divide evenly\nB - np.block(): Assembles arrays from blocks\nH - np.hsplit(): Splits an array horizontally\nV - np.vsplit(): Splits an array vertically\n\nExamples:\n```\n# array_split\narr = np.array([1, 2, 3, 4, 5, 6])\nresult = np.array_split(arr, 4)\nprint(result)\n# Output: [array([1, 2]), array([3, 4]), array([5]), array([6])]\n\n# block\narr = np.block([[np.eye(2), np.ones((2, 2))], [np.zeros((2, 2)), np.eye(2)]])\nprint(arr)\n# Output:\n# [[1. 0. 1. 1.]\n#  [0. 1. 1. 1.]\n#  [0. 0. 1. 0.]\n#  [0. 0. 0. 1.]]\n\n# hsplit\narr = np.array([[1, 2, 3], [4, 5, 6]])\nresult = np.hsplit(arr, 3)\nprint(result)\n# Output: [array([[1], [4]]), array([[2], [5]]), array([[3], [6]])]\n\n# vsplit\nresult = np.vsplit(arr, 2)\nprint(result)\n# Output: [array([[1, 2, 3]]), array([[4, 5, 6]])]\n```"
    },
    {
      "question": "Masked Arrays Hide Filled Masks",
      "answer": "M - np.ma.masked_array(): Creates a masked array, where some elements are 'masked' (ignored) in computations\nM - np.ma.masked_where(): Masks elements where a condition is met\nF - np.ma.filled(): Fills the masked elements of an array with a specified value\n\nExamples:\n```\n# masked_array\narr = np.ma.masked_array([1, 2, 3], mask=[0, 1, 0])\nprint(arr)\n# Output: [1 -- 3]\n\n# masked_where\narr = np.ma.masked_where([1, 2, 3] > 2, [1, 2, 3])\nprint(arr)\n# Output: [1 2 --]\n\n# filled\narr = np.ma.masked_array([1, 2, 3], mask=[0, 1, 0])\nfilled_arr = np.ma.filled(arr, 0)\nprint(filled_arr)\n# Output: [1 0 3]\n```"
    },
    {
      "question": "Matrix Blocks Stack Norms Conditionally",
      "answer": "M - np.matrix(): Creates a matrix (specifically for linear algebra operations)\nB - np.bmat(): Builds a matrix from blocks\nN - np.linalg.norm(): Computes the matrix or vector norm\nC - np.linalg.cond(): Computes the condition number of a matrix\n\nExamples:\n```\n# matrix\nmat = np.matrix([[1, 2], [3, 4]])\nprint(mat)\n# Output:\n# [[1 2]\n#  [3 4]]\n\n# bmat\nmat = np.bmat([[np.eye(2), np.ones((2, 2))], [np.zeros((2, 2)), np.eye(2)]])\nprint(mat)\n# Output:\n# [[1. 0. 1. 1.]\n#  [0. 1. 1. 1.]\n#  [0. 0. 1. 0.]\n#  [0. 0. 0. 1.]]\n\n# linalg.norm\nvec = np.array([1, 2, 3])\nnorm = np.linalg.norm(vec)\nprint(norm)\n# Output: 3.7416573867739413\n\n# linalg.cond\nmat = np.array([[1, 2], [3, 4]])\ncond = np.linalg.cond(mat)\nprint(cond)\n# Output: 14.933034373659268\n```"
    },
    {
      "question": "Exponential Bins Produce Gamma",
      "answer": "E - np.random.exponential(): Generates samples from an exponential distribution\nB - np.random.binomial(): Generates samples from a binomial distribution\nP - np.random.poisson(): Generates samples from a Poisson distribution\nG - np.random.gamma(): Generates samples from a Gamma distribution\n\nExamples:\n```\n# exponential\nresult = np.random.exponential(scale=1.0, size=5)\nprint(result)\n# Output (may vary): [0.46926809 0.18079793 0.01348917 1.15150672 0.63921859]\n\n# binomial\nresult = np.random.binomial(n=10, p=0.5, size=5)\nprint(result)\n# Output (may vary): [5 6 7 4 5]\n\n# poisson\nresult = np.random.poisson(lam=3.0, size=5)\nprint(result)\n# Output (may vary): [2 3 4 2 1]\n\n# gamma\nresult = np.random.gamma(shape=2.0, scale=1.0, size=5)\nprint(result)\n# Output (may vary): [3.15185544 1.91291971 1.00879354 1.72083958 3.25185009]\n```"
    },
    

  ]






  /*  whatAreAlgorithms : [
    { question: "What are algorithms?", answer: "A set of instructions to solve a problem or perform a task." },
    { question: "What are the four principles of algorithms?", answer: "Correctness, Efficiency, Clarity, Finiteness." },
    { question: "Why are algorithms important?", answer: "They optimize processes and make decisions, foundational in tech." },
    { question: "What are the types of algorithms?", answer: "Brute force, Divide and Conquer, Dynamic Programming, Greedy, Backtracking." },
    { question: "What is a simple algorithm example?", answer: "Finding the maximum value in an array by iterating through it." },
    { question: "How do algorithms relate to data structures?", answer: "Algorithms manipulate data; structure choice affects efficiency." },
    { question: "What is pseudocode?", answer: "A simplified way to outline an algorithm’s logic." },
    { question: "What’s the difference between an algorithm and a program?", answer: "An algorithm is a plan; a program is its implementation." },
    { question: "What is algorithm complexity?", answer: "Measures resource use (time/space) as input size grows." },
    { question: "What are iterative and recursive algorithms?", answer: "Iterative uses loops; recursive calls itself." },
    { question: "What’s an example of recursion?", answer: "Fibonacci sequence using base cases and recursion." },
    { question: "What is a brute force algorithm?", answer: "Tries all solutions; simple but often inefficient." },
    { question: "What is a heuristic algorithm?", answer: "Finds a good solution quickly when exact ones are impractical." },
    { question: "What’s the difference between deterministic and non-deterministic algorithms?", answer: "Deterministic gives the same result; non-deterministic may vary." },
    { question: "What is a probabilistic algorithm?", answer: "Uses randomization, leading to varying results." },
    { question: "What is an example of divide and conquer?", answer: "Merge Sort: divides data, sorts, then merges." },
    { question: "What is an optimization algorithm?", answer: "Finds the best solution, maximizing or minimizing a function." },
    { question: "What’s the purpose of sorting algorithms?", answer: "Organize data, improving the efficiency of operations." },
    { question: "What are common applications of algorithms?", answer: "Data analysis, search engines, encryption, AI, etc." },
    { question: "How do machine learning algorithms differ from traditional algorithms?", answer: "Machine learning learns and improves; traditional algorithms follow fixed steps." }
  ],
  sortingAlgorithms : [
    {
      question: "What is Bubble Sort?",
      answer: "A simple comparison-based algorithm that repeatedly swaps adjacent elements if they're in the wrong order.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
    },
    {
      question: "Bubble Sort Pseudo-code\n\nMnemonic: FFISE\nPhrase: 'Friendly Frogs Inspire Swift Endings Everywhere'",
      answer: "for i from 0 to n-1 do\n    for j from 0 to n-i-2 do\n        if arr[j] > arr[j+1] then\n            swap arr[j] and arr[j+1]\n    end for\nend for"
    },
    {
      question: "What is Quick Sort?",
      answer: "Efficient divide-and-conquer algorithm that selects a pivot, partitions elements, and sorts sub-arrays.\n\nComplexity: Avg O(n log n), Worst O(n²)\nBest for: Large datasets."
    },
    {
      question: "Quick Sort Pseudo-code\n\nMnemonic: FIPQQE\nPhrase: 'Fast Iguanas Prefer Quick Quick Endings Everywhere'",
      answer: "function quicksort(arr, low, high)\n    if low < high then\n        pi = partition(arr, low, high)\n        quicksort(arr, low, pi-1)\n        quicksort(arr, pi+1, high)\nend function"
    },
    {
      question: "What is Merge Sort?",
      answer: "Efficient, stable, divide-and-conquer algorithm that splits arrays and merges sorted halves.\n\nComplexity: O(n log n)\nBest for: Large datasets or when stability is needed."
    },
    {
      question: "Merge Sort Pseudo-code\n\nMnemonic: FIMLRMMME\nPhrase: 'Friendly Iguanas Make Lovely Red Mangoes Merging Magnificently, Even Everywhere'",
      answer: "function mergesort(arr)\n    if length of arr > 1 then\n        mid = length of arr / 2\n        left = arr[0...mid-1]\n        right = arr[mid...end]\n        mergesort(left)\n        mergesort(right)\n        merge(arr, left, right)\nend function"
    },
    {
      question: "What is Selection Sort?",
      answer: "Simple algorithm that repeatedly selects the smallest element from the unsorted portion and moves it to the sorted portion.\n\nComplexity: O(n²)\nBest for: Small datasets or when memory writes are costly."
    },
    {
      question: "Selection Sort Pseudo-code\n\nMnemonic: FMFIMSE\nPhrase: 'Friendly Monsters Find Interesting Mangoes Everywhere, Sweet Everywhere'",
      answer: "for i from 0 to n-1 do\n    min_index = i\n    for j from i+1 to n do\n        if arr[j] < min_index then\n            min_index = j\n    swap arr[i] with arr[min_index]\nend for"
    },
    {
      question: "What is Insertion Sort?",
      answer: "Simple algorithm that builds the sorted array one item at a time.\n\nComplexity: O(n²)\nBest for: Small or nearly sorted datasets."
    },
    {
      question: "Insertion Sort Pseudo-code\n\nMnemonic: FKJWAJE\nPhrase: 'Friendly Koalas Jump With Amazing Joy Every Afternoon Everywhere'",
      answer: "for i from 1 to n-1 do\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key do\n        arr[j+1] = arr[j]\n        j = j - 1\n    arr[j+1] = key\nend for"
    },
    {
      question: "What is Heap Sort?",
      answer: "Comparison-based algorithm using a binary heap structure, consistently good performance.\n\nComplexity: O(n log n)\nBest for: Large datasets needing consistent performance."
    },
    {
      question: "Heap Sort Pseudo-code\n\nMnemonic: FBFSHE\nPhrase: 'Friendly Bees Fly Swiftly Home Every Evening'",
      answer: "function heapsort(arr)\n    buildMaxHeap(arr)\n    for i from n-1 to 1 do\n        swap arr[0] with arr[i]\n        heapify(arr, 0, i)\nend function"
    },
    {
      question: "What is Radix Sort?",
      answer: "Non-comparative algorithm that sorts integers by grouping digits.\n\nComplexity: O(nk) where k is digits in the largest number.\nBest for: Sorting integers or fixed-length strings."
    },
    {
      question: "Radix Sort Pseudo-code\n\nMnemonic: FFCE\nPhrase: 'Friendly Frogs Count Eggs Everywhere'",
      answer: "function radixsort(arr)\n    for each digit from least significant to most significant do\n        countingSortByDigit(arr, digit)\nend for"
    },
    {
      question: "What are the key principles of sorting algorithms?",
      answer: "Correctness, Efficiency, Stability, and Adaptability for specific input types."
    },
    {
      question: "What is the difference between stable and unstable sorting algorithms?",
      answer: "Stable keeps relative order of equal elements, unstable does not.\n\nStable: Merge, Insertion, Bubble, Counting\nUnstable: Quick, Heap, Selection."
    },
    {
      question: "How do you choose the right sorting algorithm?",
      answer: "Consider dataset size, memory, stability, worst vs average case performance, and implementation complexity."
    }
  ],
  searchAlgorithms: [
    {
      question: "What is Linear Search?",
      answer: "Linear Search checks each element sequentially until the target is found or the list ends.\n\nComplexity: O(n)\nBest for: Small or unsorted datasets.\nPros: Simple and works on any dataset.\nCons: Inefficient for large datasets."
    },
    {
      question: "Linear Search Pseudo-code\n\nMnemonic: FFIFE\nPhrase: 'Friendly Foxes Inspect Forests Endlessly'",
      answer: "for i from 0 to n-1 do\n    if arr[i] == target then\n        return i\n    end if\nend for\nreturn -1"
    },
    {
      question: "When should you use Linear Search?",
      answer: "Use for small, unsorted datasets or when sorting is costly."
    },
    {
      question: "What is Binary Search?",
      answer: "Binary Search halves the search range in sorted datasets until the target is found.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets.\nPros: Faster than Linear Search.\nCons: Requires sorted data."
    },
    {
      question: "Binary Search Pseudo-code\n\nMnemonic: FIMWEE\nPhrase: 'Friendly Iguanas Make Wise, Efficient Explorations'",
      answer: "function binarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid = (low + high) / 2\n        if arr[mid] == target then\n            return mid\n        else if arr[mid] < target then\n            low = mid + 1\n        else\n            high = mid - 1\n        end if\n    end while\n    return -1"
    },
    {
      question: "When should you use Binary Search?",
      answer: "Use for large, sorted datasets."
    },
    {
      question: "What is Interpolation Search?",
      answer: "Interpolation Search estimates the position of the target using interpolation.\n\nComplexity: O(log log n) best, O(n) worst\nBest for: Uniformly distributed datasets."
    },
    {
      question: "Interpolation Search Pseudo-code\n\nMnemonic: FLIIEER\nPhrase: 'Friendly Lions Interpolate In Every Excellent Region'",
      answer: "function interpolationSearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high and target >= arr[low] and target <= arr[high] do\n        pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])\n        if arr[pos] == target then\n            return pos\n        else if arr[pos] < target then\n            low = pos + 1\n        else\n            high = pos - 1\n        end if\n    end while\n    return -1"
    },
    {
      question: "When should you use Interpolation Search?",
      answer: "Use when data is uniformly distributed."
    },
    {
      question: "What is Jump Search?",
      answer: "Jump Search divides an array into blocks and jumps ahead to find the target's range, then performs a linear search within that block.\n\nComplexity: O(√n)\nBest for: Large, sorted datasets."
    },
    {
      question: "Jump Search Pseudo-code\n\nMnemonic: FWSJFI\nPhrase: 'Fast Wild Sharks Jump For Ingredients'",
      answer: "function jumpSearch(arr, target)\n    n = length of arr\n    step = √n\n    prev = 0\n    while arr[min(step, n)-1] < target do\n        prev = step\n        step += √n\n        if prev >= n then\n            return -1\n        end if\n    end while\n    for i from prev to min(step, n)-1 do\n        if arr[i] == target then\n            return i\n        end if\n    end for\n    return -1"
    },
    {
      question: "When should you use Jump Search?",
      answer: "Use for large, sorted datasets when binary search isn't practical."
    },
    {
      question: "What is Exponential Search?",
      answer: "Exponential Search first finds a range where the target may lie, then uses binary search within that range.\n\nComplexity: O(log n)\nBest for: Unbounded or unknown-sized datasets."
    },
    {
      question: "Exponential Search Pseudo-code\n\nMnemonic: FBEEFE\nPhrase: 'Friendly Bears Eat Every Fish Early'",
      answer: "function exponentialSearch(arr, target)\n    if arr[0] == target then\n        return 0\n    i = 1\n    while i < n and arr[i] <= target do\n        i = i * 2\n    end while\n    return binarySearch(arr, target, i/2, min(i, n-1))"
    },
    {
      question: "When should you use Exponential Search?",
      answer: "Use for large datasets with unknown size."
    },
    {
      question: "What is Ternary Search?",
      answer: "Ternary Search splits the dataset into three parts and recursively searches the relevant third.\n\nComplexity: O(log₃ n)\nBest for: Large, sorted datasets."
    },
    {
      question: "Ternary Search Pseudo-code\n\nMnemonic: FTTRE\nPhrase: 'Friendly Tigers Traverse Remote Environments'",
      answer: "function ternarySearch(arr, target)\n    low = 0\n    high = n - 1\n    while low <= high do\n        mid1 = low + (high - low) / 3\n        mid2 = high - (high - low) / 3\n        if arr[mid1] == target then\n            return mid1\n        if arr[mid2] == target then\n            return mid2\n        else if target < arr[mid1] then\n            high = mid1 - 1\n        else if target > arr[mid2] then\n            low = mid2 + 1\n        else\n            low = mid1 + 1\n            high = mid2 - 1\n        end if\n    end while\n    return -1"
    },
    {
      question: "When should you use Ternary Search?",
      answer: "Use for large, sorted datasets with high comparison cost."
    },
    {
      question: "What is Fibonacci Search?",
      answer: "Fibonacci Search divides the array using Fibonacci numbers and eliminates sections.\n\nComplexity: O(log n)\nBest for: Large, sorted datasets."
    },
    {
      question: "Fibonacci Search Pseudo-code\n\nMnemonic: FFILFE\nPhrase: 'Friendly Frogs Inspect Leaves For Eating'",
      answer: "function fibonacciSearch(arr, target)\n    fibMm2 = 0\n    fibMm1 = 1\n    fibM = fibMm1 + fibMm2\n    while fibM < n do\n        fibMm2 = fibMm1\n        fibMm1 = fibM\n        fibM = fibMm1 + fibMm2\n    end while\n    offset = -1\n    while fibM > 1 do\n        i = min(offset + fibMm2, n-1)\n        if arr[i] < target then\n            fibM = fibMm1\n            fibMm1 = fibMm2\n            fibMm2 = fibM - fibMm1\n            offset = i\n        else if arr[i] > target then\n            fibM = fibMm2\n            fibMm1 = fibMm1 - fibMm2\n            fibMm2 = fibM - fibMm1\n        else\n            return i\n    end while\n    if fibMm1 and arr[offset + 1] == target then\n        return offset + 1\n    return -1"
    },
    {
      question: "When should you use Fibonacci Search?",
      answer: "Use for large, sorted datasets with random access."
    },
    {
      question: "What is Hashing Search?",
      answer: "Hashing Search uses a hash function to map keys to values for fast lookups.\n\nComplexity: O(1) average case\nBest for: Datasets with unique keys."
    },
    {
      question: "Hashing Search Pseudo-code\n\nMnemonic: HKKVET\nPhrase: 'Happy Kangaroos Keep Vegetables Every Time'",
      answer: "function hashingSearch(arr, key)\n    index = hashFunction(key)\n    if table[index] == key then\n        return value associated with key\n    else\n        resolve collision (e.g., linear probing)\n        return value associated with key\n    return null"
    },
    {
      question: "When should you use Hashing Search?",
      answer: "Use for datasets with unique keys requiring fast lookups."
    }
  ],
  computationalComplexity: [
    {
      question: "What is Time Complexity?",
      answer: "Time complexity describes how the time to run an algorithm scales with input size, measuring efficiency."
    },
    {
      question: "What is Space Complexity?",
      answer: "Space complexity measures the memory used by an algorithm, including input data and auxiliary space."
    },
    {
      question: "What does it take to develop a good algorithm?",
      answer: "A good algorithm balances time and space complexity, running quickly and using minimal memory."
    },
    {
      question: "How significant are Space and Time Complexity?",
      answer: "They determine algorithm efficiency, influencing performance as input size grows."
    },
    {
      question: "What are Asymptotic Notations?",
      answer: "Asymptotic notations (Big O, Omega, Theta) describe the growth of time or space complexity with input size."
    },
    {
      question: "What is Big-O (O) Notation?",
      answer: "Big-O represents the upper bound of time/space complexity, describing the worst-case scenario."
    },
    {
      question: "What is Big-Omega (Ω) Notation?",
      answer: "Big-Omega represents the lower bound of time/space complexity, describing the best-case scenario."
    },
    {
      question: "What is Big-Theta (Θ) Notation?",
      answer: "Big-Theta provides both an upper and lower bound, representing the average-case scenario."
    },
    {
      question: "What are Best, Worst, and Average Case in Asymptotic Analysis?",
      answer: "Best case is the minimum time/space needed, worst case is the maximum, and average case is typical behavior."
    },
    {
      question: "What is the significance of Space Complexity?",
      answer: "Space complexity measures the total memory used, important for systems with limited memory."
    },
    {
      question: "What is the method for calculating Time Complexity?",
      answer: "Time complexity is calculated by analyzing how many times each operation in the algorithm is executed."
    },
    {
      question: "What is the method for calculating Space Complexity?",
      answer: "Space complexity is calculated by determining the memory used by variables, inputs, and outputs."
    },
    {
      question: "What are the key differences between Time and Space Complexity?",
      answer: "Time complexity measures execution time, while space complexity measures memory usage."
    },
    {
      question: "What is Algorithm Analysis?",
      answer: "Algorithm analysis evaluates efficiency through time and space complexity, performed both theoretically and empirically."
    },
    {
      question: "What is Algorithm Complexity?",
      answer: "Algorithm complexity is the time and space required as a function of input size."
    },
    {
      question: "What factors affect the long-term usage of an algorithm?",
      answer: "Factors include efficiency, finiteness, and correctness, ensuring reliable performance over time."
    },
    {
      question: "Why are Time and Space Complexity important in Data Structures?",
      answer: "They ensure efficient operation of data structures when handling large datasets."
    }
  ],
  greedyAlgorithms: [
    {
      question: "What is a Greedy Algorithm?",
      answer: "A greedy algorithm makes locally optimal choices at each step to find a globally optimal solution, focusing on immediate benefits without considering long-term effects."
    },
    {
      question: "Steps for Creating a Greedy Algorithm",
      answer: "1. Define the problem and objective.\n2. Identify the greedy choice at each step.\n3. Make the greedy choice.\n4. Repeat until a solution is found."
    },
    {
      question: "Greedy Algorithm Example: Fractional Knapsack",
      answer: "The fractional knapsack problem optimizes value by including fractions of items based on their value-to-weight ratio.\n\nComplexity: O(n log n) due to sorting."
    },
    {
      question: "Fractional Knapsack Code Example",
      answer: `
  function fractionalKnapsack(items, capacity) {
      items.sort((a, b) => b.value / b.weight - a.value / a.weight);  // Sort by value-to-weight ratio
      let totalValue = 0;

      for (let item of items) {
          if (capacity - item.weight >= 0) {
              totalValue += item.value;
              capacity -= item.weight;
          } else {
              totalValue += item.value * (capacity / item.weight);  // Take fraction of the item
              break;
          }
      }
      return totalValue;
  }

  // Example usage:
  let items = [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }];
  console.log(fractionalKnapsack(items, 50));  // Output: 240
  `
    },
    {
      question: "Greedy Algorithm Example: Dijkstra's Algorithm",
      answer: "Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a weighted graph.\n\nComplexity: O(V^2) or O(E + V log V) with a priority queue."
    },
    {
      question: "Dijkstra's Algorithm Code Example",
      answer: `
  function dijkstra(graph, start) {
      let distances = {};
      let visited = new Set();
      let pq = new PriorityQueue((a, b) => a.distance < b.distance);

      distances[start] = 0;
      pq.enqueue({ node: start, distance: 0 });

      while (!pq.isEmpty()) {
          let { node, distance } = pq.dequeue();
          if (visited.has(node)) continue;
          visited.add(node);

          for (let neighbor in graph[node]) {
              let newDist = distance + graph[node][neighbor];
              if (newDist < (distances[neighbor] || Infinity)) {
                  distances[neighbor] = newDist;
                  pq.enqueue({ node: neighbor, distance: newDist });
              }
          }
      }
      return distances;
  }

  // Example usage:
  let graph = {
      A: { B: 1, C: 4 },
      B: { A: 1, C: 2, D: 5 },
      C: { A: 4, B: 2, D: 1 },
      D: { B: 5, C: 1 }
  };
  console.log(dijkstra(graph, 'A'));  // Output: { A: 0, B: 1, C: 3, D: 4 }
  `
    },
    {
      question: "Greedy Algorithm Example: Kruskal's Algorithm",
      answer: "Kruskal's algorithm finds the minimum spanning tree of a graph by choosing edges with the smallest weights.\n\nComplexity: O(E log E), where E is the number of edges."
    },
    {
      question: "Kruskal's Algorithm Code Example",
      answer: `
  function kruskal(graph) {
      let mst = [];
      let disjointSet = new DisjointSet(graph.vertices);

      graph.edges.sort((a, b) => a.weight - b.weight);  // Sort edges by weight

      for (let edge of graph.edges) {
          if (!disjointSet.connected(edge.u, edge.v)) {
              disjointSet.union(edge.u, edge.v);
              mst.push(edge);
          }
      }
      return mst;
  }

  // Example usage:
  let graph = { vertices: 4, edges: [{ u: 0, v: 1, weight: 1 }, { u: 1, v: 2, weight: 2 }, { u: 0, v: 2, weight: 4 }, { u: 2, v: 3, weight: 3 }] };
  console.log(kruskal(graph));  // Output: minimum spanning tree edges
  `
    },
    {
      question: "Greedy Algorithm Example: Huffman Coding",
      answer: "Huffman coding compresses data by assigning shorter codes to more frequent symbols.\n\nComplexity: O(n log n)."
    },
    {
      question: "Huffman Coding Code Example",
      answer: `
  function huffmanCoding(freq) {
      let pq = new PriorityQueue((a, b) => a.freq < b.freq);
      for (let char in freq) {
          pq.enqueue({ char, freq: freq[char] });
      }

      while (pq.size() > 1) {
          let left = pq.dequeue();
          let right = pq.dequeue();
          pq.enqueue({ char: left.char + right.char, freq: left.freq + right.freq, left, right });
      }

      return pq.dequeue();
  }

  // Example usage:
  let freq = { a: 5, b: 9, c: 12, d: 13, e: 16, f: 45 };
  console.log(huffmanCoding(freq));  // Output: Huffman tree
  `
    },
    {
      question: "Applications of Greedy Algorithms",
      answer: "Used in task scheduling, knapsack problems, Huffman encoding, and resource allocation."
    },
    {
      question: "Disadvantages of Greedy Algorithms",
      answer: "Greedy algorithms may not find the optimal solution in all cases due to local optimization without considering the global solution."
    },
    {
      question: "Limitations of Greedy Algorithms",
      answer: "Greedy algorithms can fail when the optimal solution requires a combination of earlier choices that a greedy strategy may overlook."
    }
  ]
  */
};