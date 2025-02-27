#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;
    int sum = 0;
    int maxi = INT_MIN;
    vector<int> v(n);
    unordered_map<int, pair<int,bool>> freq;

    for (int i = 0; i < n; i++)
    {
        cin >> v[i];
        sum += v[i];
        maxi = max(maxi, v[i]);
        freq[v[i]].first += 1;
        freq[v[i]].second = false;

    }

    
    for (auto ele:v)
    {
           if(!freq[ele].second){
            sum -= (freq[ele].first * ele);
            freq[ele].second=true;
            freq[ele].first=sum;
                } 
    }

    
//for mapping answer to final answer ->in the input array
    for (int i = 0; i < n; i++)      
    {
        v[i] = freq[v[i]].first;
    }

    for (int i=0;i<v.size() ;i++)
    {   if(i==v.size()-1){
            cout<<v[i];    // to prevent extra space after last element
        }
        else
        cout << v[i] <<" "; 
    }

    return 0;
}