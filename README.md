# 📚 Entraînement Vocabulaire Anglais - Manager SI

Application interactive d'entraînement au vocabulaire anglais spécialisé pour les managers en systèmes d'information.

## 📋 Description

Cette application de quiz permet aux étudiants MAALSI (Manager en Architecture et Applications Logicielles des Systèmes d'Information) de s'entraîner sur le vocabulaire technique anglais essentiel à leur domaine.

### 🎯 Objectifs pédagogiques

- Maîtriser le vocabulaire technique anglais du domaine SI
- S'auto-évaluer sur les connaissances acquises
- Identifier les points d'amélioration grâce à l'analyse des erreurs
- Préparer efficacement les évaluations

## ✨ Fonctionnalités

### 🔥 Types de questions
- **Mots métier (50 questions)** : Traduction français → anglais des termes techniques
- **Expressions (50 questions)** : Phrases et expressions courantes du domaine
- **Définitions (25 questions)** : Association termes anglais → définitions

### 📊 Système d'évaluation
- **Note A** : 75-100% (Excellent)
- **Note B** : 60-74% (Bien)
- **Note C** : 40-59% (Passable)
- **Note D** : 0-39% (Insuffisant)

### 🎮 Interface interactive
- **Feedback visuel immédiat** : Indicateurs colorés (vert ✓ / rouge ✗)
- **Analyse des erreurs** : Détail des réponses incorrectes avec corrections
- **Progression en temps réel** : Score et avancement affichés
- **Questions aléatoires** : Ordre différent à chaque session

### 📈 Suivi des performances
- Score détaillé avec pourcentage
- Nombre de mots validés
- Analyse complète des erreurs
- Identification des bonnes réponses pour chaque erreur

## 🚀 Installation

### Prérequis
- Python 3.7 ou supérieur
- Système d'exploitation : Windows, macOS, ou Linux
- Interface graphique supportée

### Installation étape par étape

1. **Cloner ou télécharger le projet**
   ```bash
   # Si vous avez git
   git clone [URL_DU_PROJET]
   
   # Ou télécharger et extraire l'archive ZIP
   ```

2. **Naviguer vers le dossier du projet**
   ```bash
   cd "g:\Cours CESI\MAALSI\TEST"
   ```

3. **Vérifier Python**
   ```bash
   python --version
   # Doit afficher Python 3.7+
   ```

4. **Lancer l'application**
   ```bash
   python main.py
   ```

## 📖 Guide d'utilisation

### Démarrage rapide
1. Lancez l'application avec `python main.py`
2. Choisissez votre type de questions (Mots, Expressions, ou Définitions)
3. Cliquez sur **"Commencer"** pour débuter le quiz
4. Sélectionnez votre réponse et cliquez sur **"Question suivante"**
5. Consultez vos résultats avec le bouton **"Résultats"**

### 🔍 Analyse des erreurs
- Après le quiz, si vous avez des erreurs, un bouton **"Voir les erreurs"** apparaît
- Cliquez dessus pour analyser en détail vos réponses incorrectes
- Chaque erreur affiche :
  - La question posée
  - Votre réponse (en rouge)
  - La bonne réponse (en vert)

### 💡 Conseils d'utilisation
- **Prenez votre temps** : Aucune limite de temps n'est imposée
- **Révisez vos erreurs** : Utilisez l'analyse pour identifier vos points faibles
- **Répétez l'exercice** : L'ordre des questions change à chaque session
- **Variez les types** : Alternez entre mots, expressions et définitions

## 📁 Structure du projet

```
TEST/
│
├── main.py              # Application principale (interface + logique)
├── vocabulary_data.py   # Base de données du vocabulaire
├── README.md           # Ce fichier
└── Consignes - Vocabulaire anglais - MAALSI A4.pdf
```

### 📄 Fichiers principaux

- **`main.py`** : Interface graphique et logique du quiz
- **`vocabulary_data.py`** : Toutes les données de vocabulaire organisées par catégories
- **`README.md`** : Documentation du projet

## 🛠️ Développement

### Technologies utilisées
- **Python 3.7+**
- **Tkinter** : Interface graphique native
- **TTK** : Widgets modernes
- **Random** : Mélange des questions et choix

### Architecture
- **Séparation des responsabilités** : Interface / Données
- **Code modulaire** : Fonctions spécialisées
- **Import propre** : Données externalisées

### Ajout de contenu
Pour ajouter du vocabulaire, modifiez le fichier `vocabulary_data.py` :

```python
# Dans vocabulary_data.py
"mots": [
    ("Nouveau terme français", "New English term"),
    # ... autres termes
]
```

**Interface qui ne s'affiche pas :**
- Vérifiez que votre système supporte les interfaces graphiques
- Sous Linux, installez `python3-tk` si nécessaire

## 📊 Contenu pédagogique

### Domaines couverts
- **Développement logiciel** : Programming, Framework, API, etc.
- **Gestion de projet** : Specifications, Roadmap, Milestones, etc.
- **Infrastructure IT** : Server, Database, Cloud computing, etc.
- **Sécurité** : Firewall, Pentest, Security policy, etc.
- **Méthodologies** : Agile, Testing, Version management, etc.

### Niveaux de difficulté
- **Mots de base** : Termes fondamentaux du SI
- **Expressions techniques** : Phrases courantes en contexte professionnel
- **Définitions avancées** : Concepts complexes et spécialisés

## 📝 Évaluation

### Critères d'évaluation
- **Précision** : Pourcentage de bonnes réponses
- **Couverture** : Maîtrise des différents domaines
- **Progression** : Amélioration entre les sessions

### Recommandations
- **Objectif minimum** : 60% (Note B) pour validation
- **Objectif recommandé** : 75% (Note A) pour maîtrise complète
- **Entraînement régulier** : Sessions courtes mais fréquentes

## 🤝 Support

Pour toute question ou suggestion d'amélioration :
- Contactez votre enseignant MAALSI
- Consultez la documentation technique dans les commentaires du code
- Proposez des améliorations via les issues du projet
- Merci CHATGPT

---

**Version** : 1.0  
**Auteur** : Étudiant du MAALSI ROUEN 2024/2026     
**Dernière mise à jour** : JUIN 2025

> 💡 **Astuce** : Utilisez cette application régulièrement pour améliorer votre vocabulaire technique anglais et réussir vos évaluations MAALSI !
