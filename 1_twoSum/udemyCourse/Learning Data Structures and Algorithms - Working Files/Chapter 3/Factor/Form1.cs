using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Factor
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void factorButton_Click(object sender, EventArgs e)
        {
            factorsTextBox.Clear();

            try
            {
                long number = long.Parse(numberTextBox.Text);
                List<long> factors = new List<long>();

                // Pull out factors of 2.
                while (number % 2 == 0)
                {
                    factors.Add(2);
                    number /= 2;
                }

                // Look for other factors.
                long factor = 3;
                long stopAt = (long)Math.Sqrt(number);
                while (factor <= stopAt)
                {
                    // See if factor divides evenly into number.
                    while (number % factor == 0)
                    {
                        // Pull out this factor.
                        factors.Add(factor);
                        number /= factor;

                        // Calculate a new stopAt value.
                        stopAt = (long)Math.Sqrt(number);
                    }

                    // Go to the next possible factor.
                    factor += 2;
                }

                // Add whatever is left over to the factors.
                if (number > 1) factors.Add(number);

                // Display the factors.
                factorsTextBox.Text = string.Join(" x ", factors);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
