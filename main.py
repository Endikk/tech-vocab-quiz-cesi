import tkinter as tk
from tkinter import ttk, messagebox
import random
from vocabulary_data import VOCABULARY_DATA

class VocabularyTrainer:
    def __init__(self, root):
        self.root = root
        self.root.title("Entraînement Vocabulaire Anglais - Manager SI")
        self.root.geometry("800x600")
        
        # Variables
        self.current_question = 0
        self.score = 0
        self.total_questions = 0
        self.current_mode = tk.StringVar(value="mots")
        self.questions = []
        self.user_answers = []
        
        # Données du vocabulaire (importées depuis vocabulary_data.py)
        self.vocabulary_data = VOCABULARY_DATA
        
        self.setup_ui()
        
    def setup_ui(self):
        # Frame principal
        main_frame = ttk.Frame(self.root, padding="20")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Titre
        title_label = ttk.Label(main_frame, text="Entraînement Vocabulaire Anglais", 
                               font=("Arial", 16, "bold"))
        title_label.grid(row=0, column=0, columnspan=2, pady=(0, 20))
        
        # Sélection du mode
        mode_frame = ttk.LabelFrame(main_frame, text="Type de questions", padding="10")
        mode_frame.grid(row=1, column=0, columnspan=2, sticky=(tk.W, tk.E), pady=(0, 20))
        
        ttk.Radiobutton(mode_frame, text="Mots métier (50)", variable=self.current_mode, 
                       value="mots").grid(row=0, column=0, sticky=tk.W, padx=(0, 20))
        ttk.Radiobutton(mode_frame, text="Expressions (50)", variable=self.current_mode, 
                       value="expressions").grid(row=0, column=1, sticky=tk.W, padx=(0, 20))
        ttk.Radiobutton(mode_frame, text="Définitions (25)", variable=self.current_mode, 
                       value="definitions").grid(row=0, column=2, sticky=tk.W)
        
        # Boutons de contrôle
        control_frame = ttk.Frame(main_frame)
        control_frame.grid(row=2, column=0, columnspan=2, pady=(0, 20))
        
        ttk.Button(control_frame, text="Commencer", command=self.start_quiz).grid(row=0, column=0, padx=(0, 10))
        ttk.Button(control_frame, text="Question suivante", command=self.next_question).grid(row=0, column=1, padx=(0, 10))
        ttk.Button(control_frame, text="Résultats", command=self.show_results).grid(row=0, column=2)
        
        # Zone de question
        self.question_frame = ttk.LabelFrame(main_frame, text="Question", padding="15")
        self.question_frame.grid(row=3, column=0, columnspan=2, sticky=(tk.W, tk.E, tk.N, tk.S), pady=(0, 20))
        
        self.question_label = ttk.Label(self.question_frame, text="Cliquez sur 'Commencer' pour débuter", 
                                       font=("Arial", 12), wraplength=700)
        self.question_label.grid(row=0, column=0, columnspan=2, pady=(0, 15))
        
        # Variables pour les réponses
        self.answer_var = tk.StringVar()
        self.answer_buttons = []
        self.answer_indicators = []  # Pour les indicateurs colorés
        
        for i in range(4):
            btn = ttk.Radiobutton(self.question_frame, text="", variable=self.answer_var, 
                                 value=str(i))
            btn.grid(row=i+1, column=0, sticky=tk.W, pady=5)
            self.answer_buttons.append(btn)
            
            # Créer un indicateur coloré (rectangle) pour chaque réponse
            indicator = tk.Label(self.question_frame, text="   ", width=3, height=1)
            indicator.grid(row=i+1, column=1, sticky=tk.E, padx=(10, 0), pady=5)
            self.answer_indicators.append(indicator)
        
        # Zone de score
        self.score_frame = ttk.LabelFrame(main_frame, text="Score", padding="10")
        self.score_frame.grid(row=4, column=0, columnspan=2, sticky=(tk.W, tk.E))
        
        self.score_label = ttk.Label(self.score_frame, text="Score: 0/0", font=("Arial", 12, "bold"))
        self.score_label.grid(row=0, column=0)
        
        self.progress_label = ttk.Label(self.score_frame, text="Question: 0/0", font=("Arial", 10))
        self.progress_label.grid(row=0, column=1, padx=(20, 0))
        
        # Configuration du redimensionnement
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(0, weight=1)
        main_frame.rowconfigure(3, weight=1)
        
    def start_quiz(self):
        mode = self.current_mode.get()
        self.current_question = 0
        self.score = 0
        self.user_answers = []
        
        # Générer les questions selon le mode
        if mode == "mots":
            self.questions = self.generate_word_questions()
        elif mode == "expressions":
            self.questions = self.generate_expression_questions()
        else:  # definitions
            self.questions = self.generate_definition_questions()
        
        self.total_questions = len(self.questions)
        random.shuffle(self.questions)
        
        self.show_question()
        self.update_score_display()
        
    def generate_word_questions(self):
        questions = []
        vocab_list = self.vocabulary_data["mots"]
        
        for french, correct_english in vocab_list:
            # Créer des distracteurs
            distractors = [item[1] for item in vocab_list if item[1] != correct_english]
            random.shuffle(distractors)
            choices = [correct_english] + distractors[:3]
            random.shuffle(choices)
            
            questions.append({
                'question': f"Comment dit-on '{french}' en anglais ?",
                'choices': choices,
                'correct': correct_english
            })
        
        return questions
    
    def generate_expression_questions(self):
        questions = []
        expr_list = self.vocabulary_data["expressions"]
        
        for french, correct_english in expr_list:
            # Créer des distracteurs
            distractors = [item[1] for item in expr_list if item[1] != correct_english]
            random.shuffle(distractors)
            choices = [correct_english] + distractors[:3]
            random.shuffle(choices)
            
            questions.append({
                'question': f"Comment dit-on '{french}' en anglais ?",
                'choices': choices,
                'correct': correct_english
            })
        
        return questions
    
    def generate_definition_questions(self):
        questions = []
        def_list = self.vocabulary_data["definitions"]
        
        for term, definition in def_list:
            # Créer des distracteurs
            distractors = [item[0] for item in def_list if item[0] != term]
            random.shuffle(distractors)
            choices = [term] + distractors[:3]
            random.shuffle(choices)
            
            questions.append({
                'question': f"Quel terme correspond à cette définition ?\n\n{definition}",
                'choices': choices,
                'correct': term
            })
        
        return questions
    
    def show_question(self):
        if self.current_question < len(self.questions):
            question_data = self.questions[self.current_question]
            
            self.question_label.config(text=question_data['question'])
            
            for i, choice in enumerate(question_data['choices']):
                self.answer_buttons[i].config(text=choice)
                # Réinitialiser les indicateurs
                self.answer_indicators[i].config(bg="white", text="   ")
            
            self.answer_var.set("")  # Réinitialiser la sélection
            self.update_progress_display()
        else:
            self.show_final_results()
    
    def next_question(self):
        if not self.questions:
            messagebox.showwarning("Attention", "Veuillez d'abord commencer un quiz !")
            return
        
        if self.current_question >= len(self.questions):
            messagebox.showinfo("Terminé", "Quiz terminé ! Consultez vos résultats.")
            return
        
        # Vérifier si une réponse est sélectionnée
        if not self.answer_var.get():
            messagebox.showwarning("Attention", "Veuillez sélectionner une réponse !")
            return
        
        # Enregistrer la réponse
        question_data = self.questions[self.current_question]
        selected_index = int(self.answer_var.get())
        selected_answer = question_data['choices'][selected_index]
        
        is_correct = selected_answer == question_data['correct']
        if is_correct:
            self.score += 1
        
        # Afficher l'indicateur coloré pour la réponse sélectionnée
        if is_correct:
            self.answer_indicators[selected_index].config(bg="green", text="✓")
        else:
            self.answer_indicators[selected_index].config(bg="red", text="✗")
            # Afficher aussi la bonne réponse en vert
            for i, choice in enumerate(question_data['choices']):
                if choice == question_data['correct']:
                    self.answer_indicators[i].config(bg="lightgreen", text="✓")
                    break
        
        self.user_answers.append({
            'question': question_data['question'],
            'selected': selected_answer,
            'correct': question_data['correct'],
            'is_correct': is_correct
        })
        
        # Attendre un moment pour que l'utilisateur voit le résultat
        self.root.after(1500, self._continue_to_next_question)
    
    def _continue_to_next_question(self):
        """Continue vers la question suivante après avoir affiché le résultat"""
        self.current_question += 1
        self.show_question()
        self.update_score_display()
    
    def update_score_display(self):
        self.score_label.config(text=f"Score: {self.score}/{self.current_question}")
    
    def update_progress_display(self):
        if self.questions:
            self.progress_label.config(text=f"Question: {self.current_question + 1}/{len(self.questions)}")
    
    def show_results(self):
        if not self.user_answers:
            messagebox.showwarning("Attention", "Aucun résultat à afficher !")
            return
        
        # Calculer le pourcentage
        percentage = (self.score / len(self.user_answers)) * 100
        
        # Déterminer la note selon le barème
        if percentage >= 75:
            grade = "A"
        elif percentage >= 60:
            grade = "B"
        elif percentage >= 40:
            grade = "C"
        else:
            grade = "D"
        
        # Compter les erreurs
        errors_count = len(self.user_answers) - self.score
        
        # Afficher les résultats
        result_text = f"""Résultats du quiz:
        
Score: {self.score}/{len(self.user_answers)} ({percentage:.1f}%)
Note: {grade}

Nombre de mots validés: {self.score}
Nombre d'erreurs: {errors_count}
        
Barème:
A: 75-100%
B: 60-74%
C: 40-59%
D: 0-39%"""
        
        # Créer une fenêtre personnalisée pour les résultats
        result_window = tk.Toplevel(self.root)
        result_window.title("Résultats du Quiz")
        result_window.geometry("500x400")
        result_window.resizable(False, False)
        
        # Centrer la fenêtre
        result_window.transient(self.root)
        result_window.grab_set()
        
        # Frame principal
        main_frame = ttk.Frame(result_window, padding="20")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Affichage des résultats
        result_label = ttk.Label(main_frame, text=result_text, font=("Arial", 11))
        result_label.pack(pady=(0, 20))
        
        # Frame pour les boutons
        button_frame = ttk.Frame(main_frame)
        button_frame.pack(pady=10)
        
        # Bouton pour voir les détails des erreurs (seulement s'il y a des erreurs)
        if errors_count > 0:
            ttk.Button(button_frame, text="Voir les erreurs", 
                      command=self.show_error_details).pack(side=tk.LEFT, padx=(0, 10))
        
        # Bouton pour fermer
        ttk.Button(button_frame, text="Fermer", 
                  command=result_window.destroy).pack(side=tk.LEFT)
    
    def show_final_results(self):
        self.show_results()
        self.question_label.config(text="Quiz terminé ! Consultez vos résultats avec le bouton 'Résultats'.")
        
        # Désactiver les boutons de réponse et réinitialiser les indicateurs
        for btn in self.answer_buttons:
            btn.config(text="")
        for indicator in self.answer_indicators:
            indicator.config(bg="white", text="   ")
    
    def show_error_details(self):
        """Affiche une fenêtre avec les détails des réponses incorrectes"""
        # Filtrer les réponses incorrectes
        incorrect_answers = [answer for answer in self.user_answers if not answer['is_correct']]
        
        if not incorrect_answers:
            messagebox.showinfo("Information", "Aucune erreur à afficher !")
            return
        
        # Créer une nouvelle fenêtre
        error_window = tk.Toplevel(self.root)
        error_window.title(f"Détails des erreurs ({len(incorrect_answers)} erreur(s))")
        error_window.geometry("700x500")
        
        # Centrer la fenêtre
        error_window.transient(self.root)
        error_window.grab_set()
        
        # Frame principal avec scrollbar
        main_frame = ttk.Frame(error_window, padding="10")
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Titre
        title_label = ttk.Label(main_frame, text="Analyse de vos erreurs", 
                               font=("Arial", 14, "bold"))
        title_label.pack(pady=(0, 15))
        
        # Frame avec scrollbar pour la liste des erreurs
        canvas = tk.Canvas(main_frame, bg="white")
        scrollbar = ttk.Scrollbar(main_frame, orient="vertical", command=canvas.yview)
        scrollable_frame = ttk.Frame(canvas)
        
        scrollable_frame.bind(
            "<Configure>",
            lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
        )
        
        canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
        canvas.configure(yscrollcommand=scrollbar.set)
        
        # Afficher chaque erreur
        for i, answer in enumerate(incorrect_answers, 1):
            # Frame pour chaque erreur
            error_frame = ttk.LabelFrame(scrollable_frame, text=f"Erreur {i}", padding="10")
            error_frame.pack(fill=tk.X, pady=(0, 10), padx=5)
            
            # Question
            question_text = answer['question']
            if len(question_text) > 80:
                question_text = question_text[:80] + "..."
            
            ttk.Label(error_frame, text=f"Question: {question_text}", 
                     font=("Arial", 10, "bold"), wraplength=600).pack(anchor=tk.W, pady=(0, 5))
            
            # Votre réponse (en rouge)
            your_answer_frame = ttk.Frame(error_frame)
            your_answer_frame.pack(fill=tk.X, pady=2)
            
            ttk.Label(your_answer_frame, text="Votre réponse: ", 
                     font=("Arial", 9)).pack(side=tk.LEFT)
            
            your_answer_label = tk.Label(your_answer_frame, text=answer['selected'], 
                                        font=("Arial", 9), fg="red", bg="white")
            your_answer_label.pack(side=tk.LEFT)
            
            # Bonne réponse (en vert)
            correct_answer_frame = ttk.Frame(error_frame)
            correct_answer_frame.pack(fill=tk.X, pady=2)
            
            ttk.Label(correct_answer_frame, text="Bonne réponse: ", 
                     font=("Arial", 9)).pack(side=tk.LEFT)
            
            correct_answer_label = tk.Label(correct_answer_frame, text=answer['correct'], 
                                          font=("Arial", 9, "bold"), fg="green", bg="white")
            correct_answer_label.pack(side=tk.LEFT)
        
        # Pack canvas et scrollbar
        canvas.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        # Frame pour le bouton fermer
        button_frame = ttk.Frame(main_frame)
        button_frame.pack(pady=(10, 0))
        
        ttk.Button(button_frame, text="Fermer", 
                  command=error_window.destroy).pack()
        
        # Permettre le défilement avec la molette de la souris
        def _on_mousewheel(event):
            canvas.yview_scroll(int(-1*(event.delta/120)), "units")
        
        canvas.bind("<MouseWheel>", _on_mousewheel)

if __name__ == "__main__":
    root = tk.Tk()
    app = VocabularyTrainer(root)
    root.mainloop()