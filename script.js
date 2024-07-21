const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const aiRoutes = require('./routes/ai');
const forumRoutes = require('./routes/forum');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/techgenius', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/forum', forumRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// routes/ai.js
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/support', aiController.getTechSupport);
router.post('/recommend', aiController.getProductRecommendations);
router.post('/compatibility', aiController.checkCompatibility);
router.post('/code-assist', aiController.getCodeAssistance);
router.get('/news', aiController.getTechNews);
router.post('/diy-project', aiController.getDIYProject);

module.exports = router;

// controllers/aiController.js
const AIModel = require('../services/AIModel');

exports.getTechSupport = async (req, res) => {
  try {
    const { query } = req.body;
    const response = await AIModel.getTechSupportResponse(query);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Implement other controller functions similarly
// services/AdManager.js
class AdManager {
    static getContextualAds(context) {
      // Implement logic to fetch contextual ads based on user queries
    }
  
    static getSponsoredComparisons(products) {
      // Implement logic to get sponsored product comparisons
    }
  
    static getBannerAds() {
      // Implement logic to fetch banner ads
    }
  
    // Implement other ad-related methods
  }
  
  module.exports = AdManager;
  // models/Post.js
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Post', PostSchema);

// Implement similar models for User, Comment, etc.

// socket/forumSocket.js
const socketIo = require('socket.io');

module.exports = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('new_post', (data) => {
      // Handle new post creation and broadcast to other users
    });

    socket.on('new_comment', (data) => {
      // Handle new comment creation and broadcast to other users
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};
// middleware/checkSubscription.js
const User = require('../models/User');

const checkSubscription = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.subscriptionTier === 'premium') {
      next();
    } else {
      res.status(403).json({ message: 'Premium subscription required for this feature' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = checkSubscription;

// Use the middleware in routes
router.get('/premium-feature', checkSubscription, premiumController.accessFeature);
const checkSubscription = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (user.subscriptionTier === 'premium') {
        next();
      } else {
        res.status(403).json({ message: 'Premium subscription required' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };