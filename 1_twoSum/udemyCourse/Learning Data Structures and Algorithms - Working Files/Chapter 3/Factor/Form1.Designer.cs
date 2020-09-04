namespace Factor
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.numberTextBox = new System.Windows.Forms.TextBox();
            this.factorButton = new System.Windows.Forms.Button();
            this.factorsTextBox = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 17);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(47, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Number:";
            // 
            // numberTextBox
            // 
            this.numberTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.numberTextBox.Location = new System.Drawing.Point(65, 14);
            this.numberTextBox.Name = "numberTextBox";
            this.numberTextBox.Size = new System.Drawing.Size(126, 20);
            this.numberTextBox.TabIndex = 1;
            this.numberTextBox.Text = "123456789012345678";
            this.numberTextBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // factorButton
            // 
            this.factorButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.factorButton.Location = new System.Drawing.Point(197, 12);
            this.factorButton.Name = "factorButton";
            this.factorButton.Size = new System.Drawing.Size(75, 23);
            this.factorButton.TabIndex = 2;
            this.factorButton.Text = "Factor";
            this.factorButton.UseVisualStyleBackColor = true;
            this.factorButton.Click += new System.EventHandler(this.factorButton_Click);
            // 
            // factorsTextBox
            // 
            this.factorsTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.factorsTextBox.Location = new System.Drawing.Point(15, 54);
            this.factorsTextBox.Name = "factorsTextBox";
            this.factorsTextBox.ReadOnly = true;
            this.factorsTextBox.Size = new System.Drawing.Size(257, 20);
            this.factorsTextBox.TabIndex = 3;
            this.factorsTextBox.TextAlign = System.Windows.Forms.HorizontalAlignment.Right;
            // 
            // Form1
            // 
            this.AcceptButton = this.factorButton;
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(284, 86);
            this.Controls.Add(this.factorsTextBox);
            this.Controls.Add(this.factorButton);
            this.Controls.Add(this.numberTextBox);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Factor";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox numberTextBox;
        private System.Windows.Forms.Button factorButton;
        private System.Windows.Forms.TextBox factorsTextBox;
    }
}

