using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SieveOfEratosthenes
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        // Find primes.
        private void findPrimesButton_Click(object sender, EventArgs e)
        {
            primesListBox.Items.Clear();
            countLabel.Text = "";
            Cursor = Cursors.WaitCursor;
            Refresh();

            // Get the primes.
            int maxNumber = int.Parse(maxTextBox.Text);
            List<int> primes = FindPrimes(maxNumber);

            // Display the results.
            foreach (int prime in primes)
                primesListBox.Items.Add(prime);
            countLabel.Text = primes.Count.ToString() + " primes";

            Cursor = Cursors.Default;
        }

        // Find the primes between 2 and maxNumber (inclusive).
        private List<int> FindPrimes(int maxNumber)
        {
            // Create the array.
            bool[] isPrime =  Enumerable.Repeat(true, maxNumber + 1).ToArray();

            // Cross out multiples of 2.
            for (int p = 4; p <= maxNumber; p += 2) isPrime[p] = false;

            // Cross out other multiples.
            int stopAt = (int)Math.Sqrt(maxNumber);
            for (int p = 3; p <= stopAt; p += 2)
            {
                // Only cross out multiples of primes.
                if (isPrime[p])
                {
                    for (int multiple = p * p; multiple <= maxNumber; multiple += 2 * p)
                        isPrime[multiple] = false;
                }
            }

            // Copy the primes into a List<int>.
            List<int> primes = new List<int>();
            for (int i = 2; i <= maxNumber; i++)
                if (isPrime[i]) primes.Add(i);

            // Return the primes.
            return primes;
        }
    }
}
